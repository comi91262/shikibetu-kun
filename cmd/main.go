package main

import (
	"bufio"
	"log"
	"os"
)

func main() {
	filename := "data/weed"

	// ファイルオープン
	fp, err := os.Open(filename)
	if err != nil {
		log.Fatal(err)
	}
	defer fp.Close()

	fp1, err := os.Create("product/hoge")
	if err != nil {
		log.Fatal(err)
	}
	defer fp1.Close()

	scanner := bufio.NewScanner(fp)

	for scanner.Scan() {
		fp1.Write([]byte(scanner.Text()))
	}

	if err = scanner.Err(); err != nil {
		log.Fatal(err)
	}

}
