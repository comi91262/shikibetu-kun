package main

import (
	"fmt"
	"shikibetu-kun/cmd/shared"
)

func main() {
	for price, list := range shared.NewBuyList() {
		fmt.Printf("%d %v\n", price, len(list))
	}
	//	for _, v := range shared.GetBuyItems() {
	//		fmt.Printf("%v %v\n", v.Name, float32(v.Price)*0.4)
	//	}
	//
	//	for _, v := range shared.GetSellItems() {
	//		fmt.Printf("%v %v\n", v.Name, float32(v.Price)*0.4)
	//	}
}
