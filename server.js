const http = require('http');
const fs = require('fs');
const express = require('express');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    // check the req.url that the client types in
    switch(req.url) {
        case '/':
            path += 'index.html'  // adding index.html to the file path
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html' // adding about.html to the file path
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301; // resource moved permanently (redirect)
            res.setHeader('Location', '/about');
            res.end();
            break;
        default: // if none of the switch cases are obeyed
            path += '404.html' 
            res.statusCode = 404; // status code 404 for error
            break;

    }

    // send a html file
    fs.readFile(path, (err,data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // if using only 1 write statement, can just pass the 
            // data directly into the res.end() method
            res.end(data);
        }
    });

}); //callback function that runs when the client makes a request to the server

server.listen(3000, 'localhost' /* hostname */, () => {
    console.log('listening for requests on port 3000')
})

// const app = express();
// app.listen(3000);
// console.log("welcome")

// app.get(':url/users/info?nonce=:nonce&ts=:ts&accountid=:accountid', (req, res) => {
//     res.sendFile('./views/index.html', { root : __dirname });
//     console.log("Success");
// })