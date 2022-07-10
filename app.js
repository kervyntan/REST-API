const express = require('express');

// express app set up
const app = express(); // creates instance of express app

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'folderName') <-- if folder name is not views

// listen for requests
app.listen(3000);

// middleware logging
app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next(); // fires this function to tell Express to carry on in the code (goes to next middleware)
})

// dummy API endpoint
app.get('/info', (req, res) => {
    res.sendFile('./data/data.json', {root : __dirname})
})
// respond to the requests
// first arg -> the path you listen to
// second arg -> callback function
app.get('/', (req, res) => {
        // need to specifiy the root directory (__dirname to get current dir name)
    // res.sendFile('./views/index.html', { root : __dirname }); 

    const blogs = [
        {title : "This is title 1", snippet : 'Trolling 1'},
        {title : "This is title 2", snippet : 'Trolling 2'},
        {title : "This is title 3", snippet : 'Trolling 3'}
    ]
    res.render('index', {title : 'flying', blogs});
})
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root : __dirname });
    res.render('about', { title : 'about'});
})
app.get('/about-us', (req, res) => {
    res.redirect('/about', { title : '404'}); // redirect to this path instead 
})

// 404 page
// use method at the bottom of code, will run everytime there is a request (if the code reaches this point)
// node only executes this code, when the others don't meet the condition
// for eg. if user type in gibberish for the url path, none of the above GET matches
// it'll reach here
// after executing a redirect, node will stop reviewing the remaining code after that line
app.use((res, req) => {
    res.sendFile('./views/404.html', { root : __dirname })
    // res.render('404', { title : '404' })
})