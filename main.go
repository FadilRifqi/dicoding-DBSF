package main

import (
	"log"
	"net/http"
)

func main() {
    // Serve static files from the current directory
    fs := http.FileServer(http.Dir("."))
    http.Handle("/", fs)

    // Start the server on port 8080
    log.Println("Listening on :8080...")
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatal(err)
    }
}
