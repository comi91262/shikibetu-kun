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

func buy(this js.Value, i []js.Value) any {
	var buy = map[int][]string{}
	for _, i := range items {
		switch {
		case strings.Contains(i.name, "壺"):
			for j := 0; j < 7; j++ {
				n := fmt.Sprintf("[%d]", j)
				b := i.price + j*100
				// normal
				buy[b] = append(buy[b], i.name+n)
				// curse
				buy[int(float32(b)*0.87)] = append(buy[int(float32(b)*0.87)], i.name+n+"[呪]")
			}
		case strings.Contains(i.name, "杖"):
			for j := 0; j < 8; j++ {
				n := fmt.Sprintf("[%d]", j)
				b := i.price + j*100
				// normal
				buy[b] = append(buy[b], i.name+n)
				// curse
				buy[int(float32(b)*0.87)] = append(buy[int(float32(b)*0.87)], i.name+n+"[呪]")
			}
		case strings.Contains(i.name, "腕輪"):
			// normal
			buy[i.price] = append(buy[i.price], i.name)
			// curse
			buy[int(float32(i.price)*0.87)] = append(buy[int(float32(i.price)*0.87)], i.name+"[呪]")
		default:
			// normal
			buy[i.price] = append(buy[i.price], i.name)
			// bless
			buy[i.price*2] = append(buy[i.price*2], i.name+"[祝]")
			// curse
			buy[int(float32(i.price)*0.87)] = append(buy[int(float32(i.price)*0.87)], i.name+"[呪]")
		}
	}

	return js.ValueOf(convert(buy[i[0].Int()]))
}

func sell(this js.Value, i []js.Value) any {
	var sell = map[int][]string{}
	for _, i := range items {
		switch {
		case strings.Contains(i.name, "壺"):
			for j := 0; j < 7; j++ {
				n := fmt.Sprintf("[%d]", j)
				p := int(float32(i.price+j*100) * 0.4)

				// normal
				sell[p] = append(sell[p], i.name+n)
				// curse
				sell[int(float32(p)*0.87)] = append(sell[int(float32(p)*0.87)], i.name+n+"[呪]")
			}
		case strings.Contains(i.name, "杖"):
			for j := 0; j < 8; j++ {
				n := fmt.Sprintf("[%d]", j)
				p := int(float32(i.price+j*100) * 0.4)

				// normal
				sell[p] = append(sell[p], i.name+n)
				// curse
				sell[int(float32(p)*0.87)] = append(sell[int(float32(p)*0.87)], i.name+n+"[呪]")
			}
		case strings.Contains(i.name, "腕輪"):
			p := int(float32(i.price) * 0.4)
			// normal
			sell[p] = append(sell[p], i.name)
			// curse
			sell[int(float32(p)*0.87)] = append(sell[int(float32(p)*0.87)], i.name+"[呪]")
		default:
			p := int(float32(i.price) * 0.4)
			// normal
			sell[p] = append(sell[p], i.name)
			// bless
			sell[p*2] = append(sell[p*2], i.name+"[祝]")
			// curse
			sell[int(float32(p)*0.87)] = append(sell[int(float32(p)*0.87)], i.name+"[呪]")
		}
	}

	return js.ValueOf(convert(sell[i[0].Int()]))
}

func convert(s []string) []any {
	r := make([]any, 0, len(s))
	for _, ss := range s {
		r = append(r, ss)
	}
	return r
}

func registerCallbacks() {
	js.Global().Set("buy", js.FuncOf(buy))
	js.Global().Set("sell", js.FuncOf(sell))
}

type item struct {
	name  string
	price int
}

var items []item

func main() {
	c := make(chan struct{}, 0)

	reader := bytes.NewReader(data)
	scanner := bufio.NewScanner(reader)

	for scanner.Scan() {
		a := strings.Split(scanner.Text(), " ")
		i := item{}
		i.name = a[0]
		i.price, _ = strconv.Atoi(a[1])

		items = append(items, i)
	}
	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	println("WASM Go Initialized")

	// register functions
	registerCallbacks()
	<-c
}
