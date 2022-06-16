// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/


// Expected Output:

// image
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader(`content-Type`, `text/html`);
    let words = ['first', 'second', 'third']
    for (let i = 0; i < words.length; i++) {
        res.write(`<h${(i == 0)? 1 : i}>This is my ${words[i]} response</h${(i == 0)? 1 : i}>`);
    }
    res.end()

});

server.listen(3000);