build:
	GOOS=js GOARCH=wasm go build -o main.wasm cmd/inspector/main.go
	deno task build
run:
	deno task start

debug:
	go run cmd/debugger/main.go

