package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

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
	filename := "data/item"

	// ファイルオープン
	fp, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer fp.Close()

	scanner := bufio.NewScanner(fp)

	items := []item{}

	for scanner.Scan() {
		a := strings.Split(scanner.Text(), " ")
		i := item{}
		i.name = a[0]
		i.price, _ = strconv.Atoi(a[1])
		//		i.sell = int(float32(i.buy) * 0.8)
		//		i.bless = int(float32(i.buy) * 2.0)
		//		i.curse = int(float32(i.buy) * 0.87)

		items = append(items, i)
	}

	if err = scanner.Err(); err != nil {
		log.Fatal(err)
	}

	// fp1, err := os.Create("product/list")
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// defer fp1.Close()

	fmt.Println("var list = map[int]string{")
	for _, i := range items {
		fmt.Printf(fmt.Sprintf("%d: \"%s\",\n", i.price, i.name))
	}
	fmt.Println("}")
}

func open(filename string) {
	fp, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer fp.Close()
}
