build:
	GOOS=js GOARCH=wasm go build -o shikibetu-kun/main.wasm cmd/main.go
run:
	deno run --allow-read main.js
