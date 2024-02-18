package main

import (
	"bufio"
	"bytes"
	_ "embed"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

//go:embed data/item
var data []byte

//type item struct {
//	name  string
//	buy   int
//	sell  int
//	bless int
//	curse int
//}

type item struct {
	name  string
	price int
}

func main() {
	//	filename := "data/item"
	//
	//	// ファイルオープン
	//	fp, err := os.Open(filename)
	//	if err != nil {
	//		log.Fatal(err)
	//	}
	//	defer fp.Close()

	reader := bytes.NewReader(data)
	scanner := bufio.NewScanner(reader)

	items := []item{}

	for scanner.Scan() {
		a := strings.Split(scanner.Text(), " ")
		i := item{}
		i.name = a[0]
		i.price, _ = strconv.Atoi(a[1])
		//		i.sell =
		//		i.bless = int(float32(i.buy) * 2.0)
		//		i.curse =

		items = append(items, i)
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	// fp1, err := os.Create("product/list")
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer fp1.Close()

	// fmt.Println("var list = map[int]string{")
	var buy = map[int][]string{}
	var sell = map[int][]string{}
	for _, i := range items {
		switch {
		case strings.Contains(i.name, "壺"):
			for j := 0; j < 7; j++ {
				n := fmt.Sprintf("[%d]", j)
				b := i.price + j*100
				// normal
				buy[b] = append(buy[b], i.name+n)
				// bless
				buy[b*2] = append(buy[b*2], i.name+n+"[祝]")
				// curse
				buy[int(float32(b)*0.87)] = append(buy[int(float32(b)*0.87)], i.name+n+"[呪]")

				p := int(float32(b) * 0.8)
				// normal
				sell[p] = append(sell[p], i.name+n)
				// bless
				sell[p*2] = append(sell[p*2], i.name+n+"[祝]")
				// curse
				sell[int(float32(p)*0.87)] = append(sell[int(float32(p)*0.87)], i.name+n+"[呪]")
			}
		case strings.Contains(i.name, "杖"):
			for j := 0; j < 8; j++ {
				n := fmt.Sprintf("[%d]", j)
				b := i.price + j*100
				// normal
				buy[b] = append(buy[b], i.name+n)
				// bless
				buy[b*2] = append(buy[b*2], i.name+n+"[祝]")
				// curse
				buy[int(float32(b)*0.87)] = append(buy[int(float32(b)*0.87)], i.name+n+"[呪]")

				p := int(float32(b) * 0.8)
				// normal
				sell[p] = append(sell[p], i.name+n)
				// bless
				sell[p*2] = append(sell[p*2], i.name+n+"[祝]")
				// curse
				sell[int(float32(p)*0.87)] = append(sell[int(float32(p)*0.87)], i.name+n+"[呪]")
			}
		default:
			// normal
			buy[i.price] = append(buy[i.price], i.name)
			// bless
			buy[i.price*2] = append(buy[i.price*2], i.name+"[祝]")
			// curse
			buy[int(float32(i.price)*0.87)] = append(buy[int(float32(i.price)*0.87)], i.name+"[呪]")

			p := int(float32(i.price) * 0.8)
			// normal
			sell[p] = append(sell[p], i.name)
			// bless
			sell[p*2] = append(sell[p*2], i.name+"[祝]")
			// curse
			sell[int(float32(p)*0.87)] = append(sell[int(float32(p)*0.87)], i.name+"[呪]")
		}
	}
	// fmt.Println("}")
	// fmt.Println(buy)
	// if len(os.Args) > 0 {
	// 	m, _ := strconv.Atoi(os.Args[1])
	// 	fmt.Println(buy[m])
	// }
}

func open(filename string) {
	fp, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer fp.Close()
}
