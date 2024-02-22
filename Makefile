build:
	GOOS=js GOARCH=wasm go build -o main.wasm cmd/main.go
	deno task build
run:
	deno task start
