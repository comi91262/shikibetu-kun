build:
	tinygo build -o main.wasm -target wasm ./cmd/inspector/main.go

cp-wasm-js:
	cp $$(tinygo env TINYGOROOT)/targets/wasm_exec.js ./islands/wasm_exec.js
	chmod +w ./islands/wasm_exec.js
	sed -i s/require\(\"/require\(\"node:/ ./islands/wasm_exec.js

prod-build: build
	deno task build

run:
	deno task start

debug:
	go run cmd/creator/main.go

