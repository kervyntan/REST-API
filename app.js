const express = require('express');

// express app set up
const app = express(); // creates instance of express app

// listen for requests
app.listen(3000);

// respond to the requests
// first arg -> the path you listen to
// second arg -> callback function
app.get('/', (req, res) => {
        // need to specifiy the root directory (__dirname to get current dir name)
    res.sendFile('./views/index.html', { root : __dirname }); 
})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root : __dirname });
})
app.get('/about-us', (req, res) => {
    res.redirect('/about'); // redirect to this path instead 
})

// 404 page
// use method at the bottom of code, will run everytime there is a request (if the code reaches this point)
// node only executes this code, when the others don't meet the condition
// for eg. if user type in gibberish for the url path, none of the above GET matches
// it'll reach here
// after executing a redirect, node will stop reviewing the remaining code after that line
app.use((res, req) => {
    res.sendFile('./views/404.html', { root : __dirname })
})