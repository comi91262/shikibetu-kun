package shared

import (
	"bufio"
	"bytes"
	"embed"
	"fmt"
	"strconv"
	"strings"
)

//go:embed buyer.txt seller.txt
var fs embed.FS

var buyItems []Item
var sellItems []Item

type Item struct {
	Name  string
	Price int
}

func init() {
	bs, err := loadFile("buyer.txt", fs)
	if err != nil {
		panic(err)
	}
	buyItems = bs
	ss, err := loadFile("seller.txt", fs)
	if err != nil {
		panic(err)
	}
	sellItems = ss
}

func loadFile(name string, fs embed.FS) ([]Item, error) {
	bs, err := fs.ReadFile(name)
	if err != nil {
		return nil, err
	}

	var items []Item
	scanner := bufio.NewScanner(bytes.NewReader(bs))
	for scanner.Scan() {
		a := strings.Split(scanner.Text(), " ")
		p, _ := strconv.Atoi(a[1])

		items = append(items, Item{
			Name:  a[0],
			Price: p,
		})
	}
	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return items, nil
}

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

func GetBuyItems() []Item {
	return buyItems
}

func GetSellItems() []Item {
	return buyItems
}

func NewBuyList() map[int][]string {
	list := make(map[int][]string)

	for _, item := range buyItems {
		switch {
		case strings.Contains(item.Name, "の壺") || strings.Contains(item.Name, "割れない壺"):
			mi, mx := getPotCount(item.Name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				b := item.Price + i*100
				// normal
				list[b] = append(list[b], item.Name+n)
				// curse
				list[int(float32(b)*0.87)] = append(list[int(float32(b)*0.87)], item.Name+n+"[呪]")
			}
		case strings.Contains(item.Name, "杖"):
			mi, mx := getCaneCount(item.Name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				b := item.Price + i*100
				// normal
				list[b] = append(list[b], item.Name+n)
				// curse
				list[int(float32(b)*0.87)] = append(list[int(float32(b)*0.87)], item.Name+n+"[呪]")
			}
		case strings.Contains(item.Name, "腕輪"):
			// normal
			list[item.Price] = append(list[item.Price], item.Name)
			// curse
			list[int(float32(item.Price)*0.87)] = append(list[int(float32(item.Price)*0.87)], item.Name+"[呪]")
		default:
			// normal
			list[item.Price] = append(list[item.Price], item.Name)
			// bless
			list[item.Price*2] = append(list[item.Price*2], item.Name+"[祝]")
			// curse
			list[int(float32(item.Price)*0.87)] = append(list[int(float32(item.Price)*0.87)], item.Name+"[呪]")
		}
	}

	return list
}

func NewSellList() map[int][]string {
	list := make(map[int][]string)

	for _, item := range sellItems {
		switch {
		case strings.Contains(item.Name, "の壺") || strings.Contains(item.Name, "割れない壺"):
			mi, mx := getPotCount(item.Name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				p := int(float32(item.Price + i*40))

				// normal
				list[p] = append(list[p], item.Name+n)
				// curse
				list[int(float32(p)*0.87)] = append(list[int(float32(p)*0.87)], item.Name+n+"[呪]")
			}
		case strings.Contains(item.Name, "杖"):
			mi, mx := getCaneCount(item.Name)
			for i := mi; i <= mx; i++ {
				n := fmt.Sprintf("[%d]", i)
				p := int(float32(item.Price + i*40))

				// normal
				list[p] = append(list[p], item.Name+n)
				// curse
				list[int(float32(p)*0.87)] = append(list[int(float32(p)*0.87)], item.Name+n+"[呪]")
			}
		case strings.Contains(item.Name, "腕輪"):
			p := int(float32(item.Price))
			// normal
			list[p] = append(list[p], item.Name)
			// curse
			list[int(float32(p)*0.87)] = append(list[int(float32(p)*0.87)], item.Name+"[呪]")
		default:
			p := int(float32(item.Price))
			// normal
			list[p] = append(list[p], item.Name)
			// bless
			list[p*2] = append(list[p*2], item.Name+"[祝]")
			// curse
			list[int(float32(p)*0.87)] = append(list[int(float32(p)*0.87)], item.Name+"[呪]")
		}
	}

	return list
}
