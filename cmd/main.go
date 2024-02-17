package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

type item struct {
	name  string
	buy   int
	sell  int
	bless int
	curse int
}

func main() {
	filename := "data/weed"

	// ファイルオープン
	fp, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer fp.Close()

	//	fp1, err := os.Create("product/hoge")
	//	if err != nil {
	//		log.Fatal(err)
	//	}
	//	defer fp1.Close()

	scanner := bufio.NewScanner(fp)

	for scanner.Scan() {
		a := strings.Split(scanner.Text(), " ")
		i := item{}
		i.name = a[0]
		i.buy, _ = strconv.Atoi(a[1])
		i.sell = int(float32(i.buy) * 0.8)
		i.bless = int(float32(i.buy) * 2.0)
		i.curse = int(float32(i.buy) * 0.87)

		fmt.Printf("%d %s\n", i.buy, i.name)
	}

	if err = scanner.Err(); err != nil {
		log.Fatal(err)
	}

}

func open(filename string) {
	fp, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer fp.Close()
}
