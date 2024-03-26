package main

import (
	"fmt"
	"shikibetu-kun/cmd/shared"
	"sort"
	"strings"
)

func main() {
	createBuyList()
	createSellList()
}

func createBuyList() {
	li := shared.NewBuyList()

	s := make([]int, 0, len(li))
	for k := range li {
		s = append(s, k)
	}
	sort.Ints(s)

	fmt.Println("var buyList = map[int][]string{")
	for _, price := range s {
		fmt.Printf("%d: {\"%s\"},\n", price, strings.Join(li[price], "\",\""))
	}
	fmt.Println("}")

}

func createSellList() {
	li := shared.NewSellList()

	s := make([]int, 0, len(li))
	for k := range li {
		s = append(s, k)
	}
	sort.Ints(s)

	fmt.Println("var sellList = map[int][]string{")
	for _, price := range s {
		fmt.Printf("%d: {\"%s\"},\n", price, strings.Join(li[price], "\",\""))
	}
	fmt.Println("}")

}
