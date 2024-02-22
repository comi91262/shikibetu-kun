package main

import (
	"bufio"
	"bytes"
	_ "embed"
	"fmt"
	"log"
	"strconv"
	"strings"
	"syscall/js"
)

//go:embed data/item
var data []byte

type item struct {
	name  string
	price int
}

var items []item
var buyList map[int][]string
var sellList map[int][]string

func getPotCount(name string) (int, int) {
	switch name {
	case "保存の壺", "識別の壺", "変化の壺", "ただの壺", "やりすごしの壺", "換金の壺", "手封じの壺", "割れない壺", "背中の壺", "トドの壺", "水鉄砲の壺", "魔物の壺", "ビックリの壺":
		return 3, 5
	case "倉庫の壺":
		return 2, 5
	case "底抜けの壺", "おはらいの壺", "呪いの壺":
		return 2, 4
	case "合成の壺":
		return 3, 4
	case "笑いの壺", "強化の壺", "弱化の壺":
		return 2, 3
	default:
		return 0, 0
	}
}

func getCaneCount(name string) (int, int) {
	switch name {
	case "ただの杖", "吹き飛ばしの杖", "場所がえの杖", "飛びつきの杖", "転ばぬ先の杖", "痛み分けの杖", "ガイコツまどうの杖":
		return 5, 7
	case "かなしばりの杖", "封印の杖", "身代わりの杖", "一時しのぎの杖", "感電の杖", "トンネルの杖", "土塊の杖", "加速の杖", "鈍足の杖", "幸せの杖", "不幸の杖", "桃まんの杖":
		return 4, 6
	case "導きの杖":
		return 2, 4
	default:
		return 0, 0
	}
}

func convert(s []string) []any {
	r := make([]any, 0, len(s))
	for _, ss := range s {
		r = append(r, ss)
	}
	return r
}

func newBuyList() {
	if buyList == nil {
		buyList = make(map[int][]string)
	}

	for _, item := range items {
		switch {
		case strings.Contains(item.name, "壺"):
			mi, mx := getPotCount(item.name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				b := item.price + i*100
				// normal
				buyList[b] = append(buyList[b], item.name+n)
				// curse
				buyList[int(float32(b)*0.87)] = append(buyList[int(float32(b)*0.87)], item.name+n+"[呪]")
			}
		case strings.Contains(item.name, "杖"):
			mi, mx := getCaneCount(item.name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				b := item.price + i*100
				// normal
				buyList[b] = append(buyList[b], item.name+n)
				// curse
				buyList[int(float32(b)*0.87)] = append(buyList[int(float32(b)*0.87)], item.name+n+"[呪]")
			}
		case strings.Contains(item.name, "腕輪"):
			// normal
			buyList[item.price] = append(buyList[item.price], item.name)
			// curse
			buyList[int(float32(item.price)*0.87)] = append(buyList[int(float32(item.price)*0.87)], item.name+"[呪]")
		default:
			// normal
			buyList[item.price] = append(buyList[item.price], item.name)
			// bless
			buyList[item.price*2] = append(buyList[item.price*2], item.name+"[祝]")
			// curse
			buyList[int(float32(item.price)*0.87)] = append(buyList[int(float32(item.price)*0.87)], item.name+"[呪]")
		}
	}
	fmt.Println(buyList)
}

func newSellList() {
	if sellList == nil {
		sellList = make(map[int][]string)
	}

	for _, item := range items {
		switch {
		case strings.Contains(item.name, "壺"):
			mi, mx := getPotCount(item.name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				p := int(float32(item.price+i*100) * 0.4)

				// normal
				sellList[p] = append(sellList[p], item.name+n)
				// curse
				sellList[int(float32(p)*0.87)] = append(sellList[int(float32(p)*0.87)], item.name+n+"[呪]")
			}
		case strings.Contains(item.name, "杖"):
			mi, mx := getCaneCount(item.name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				p := int(float32(item.price+i*100) * 0.4)

				// normal
				sellList[p] = append(sellList[p], item.name+n)
				// curse
				sellList[int(float32(p)*0.87)] = append(sellList[int(float32(p)*0.87)], item.name+n+"[呪]")
			}
		case strings.Contains(item.name, "腕輪"):
			p := int(float32(item.price) * 0.4)
			// normal
			sellList[p] = append(sellList[p], item.name)
			// curse
			sellList[int(float32(p)*0.87)] = append(sellList[int(float32(p)*0.87)], item.name+"[呪]")
		default:
			p := int(float32(item.price) * 0.4)
			// normal
			sellList[p] = append(sellList[p], item.name)
			// bless
			sellList[p*2] = append(sellList[p*2], item.name+"[祝]")
			// curse
			sellList[int(float32(p)*0.87)] = append(sellList[int(float32(p)*0.87)], item.name+"[呪]")
		}
	}
	fmt.Println(sellList)
}

func buy(this js.Value, i []js.Value) any {
	return js.ValueOf(convert(buyList[i[0].Int()]))
}

func sell(this js.Value, i []js.Value) any {
	return js.ValueOf(convert(sellList[i[0].Int()]))
}

func registerCallbacks() {
	js.Global().Set("buy", js.FuncOf(buy))
	js.Global().Set("sell", js.FuncOf(sell))
}

func main() {
	reader := bytes.NewReader(data)
	scanner := bufio.NewScanner(reader)

	for scanner.Scan() {
		a := strings.Split(scanner.Text(), " ")
		p, _ := strconv.Atoi(a[1])

		items = append(items, item{
			name:  a[0],
			price: p,
		})
	}
	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	newBuyList()
	newSellList()

	registerCallbacks()

	log.Println("WASM Go Initialized")
	<-make(chan bool)
}
