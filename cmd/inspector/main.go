package main

import (
	_ "embed"
	"log/slog"
	"shikibetu-kun/cmd/shared"
	"syscall/js"
)

var buyList map[int][]string
var sellList map[int][]string

func convert(s []string) []any {
	r := make([]any, 0, len(s))
	for _, ss := range s {
		r = append(r, ss)
	}
	return r
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
	buyList = shared.NewBuyList()
	sellList = shared.NewSellList()

	registerCallbacks()

	slog.Info("wasm initialized")
	<-make(chan bool)
}
