# Static Single Website with Golang

This repository contains the code for static single website. The project is built with html css and javascript.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Go**: [Install Go](https://golang.org/doc/install) (version 1.16 or higher)
- **Git**: [Install Git](https://git-scm.com/)

## Getting Started

To get started with this project, follow these steps:

### 1. Clone the repository

Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/FadilRifqi/dicoding-DBSF.git
```

### 2. Navigate to the project directory

Change your directory to the cloned repository:

```bash
cd dicoding-DBSF
```

### 3. Run the application

Run the following command to execute the Go application:

```go
go run ./main.go
```

### 4. Access the application

Open a web browser and navigate to http://localhost:8080 to access the application.

## Project Structure

```bash
dicoding-DBSF/
├── go.mod
├── main.go
└── index.html
```

- **go.mod**: Go module file that defines the dependencies for this project.
- **main.go**: The main Go file containing the code for the web server.
- **index.html**: The HTML file that is served by the web server.

## 🚀 Usage

Once the application is up and running, you can access the web server at:

🌐 **http://localhost:8080**

The server will automatically serve the `index.html` file located in the project directory.

### Steps to Access:

1. Open your favorite web browser.
2. Enter the following URL into the address bar:[http://localhost:8080](http://localhost:8080)
3. You should see the content of the `index.html` file being rendered.

### What's Included:

- Your **web server** is running on port `8080`.
- The **index.html** file will be the default file served by the Go web server.
