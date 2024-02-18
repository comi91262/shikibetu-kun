build:
	GOOS=js GOARCH=wasm go build -o main.wasm cmd/main.go
run:
	deno run --allow-read main.js
