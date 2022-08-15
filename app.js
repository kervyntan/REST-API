// const express = require('express');

// // express app set up
// const app = express(); // creates instance of express app

// // register view engine
// app.set('view engine', 'ejs');
// // app.set('views', 'folderName') <-- if folder name is not views

// // listen for requests
// app.listen(3000);

// // middleware logging
// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next(); // fires this function to tell Express to carry on in the code (goes to next middleware)
// })

// // dummy API endpoint
// app.get('/info', (req, res) => {
//     res.sendFile('./data/data.json', {root : __dirname})
// })
// // respond to the requests
// // first arg -> the path you listen to
// // second arg -> callback function
// app.get('/', (req, res) => {
//         // need to specifiy the root directory (__dirname to get current dir name)
//     // res.sendFile('./views/index.html', { root : __dirname }); 

//     const blogs = [
//         {title : "This is title 1", snippet : 'Trolling 1'},
//         {title : "This is title 2", snippet : 'Trolling 2'},
//         {title : "This is title 3", snippet : 'Trolling 3'}
//     ]
//     res.render('index', {title : 'flying', blogs});
// })
// app.get('/about', (req, res) => {
//     // res.sendFile('./views/about.html', { root : __dirname });
//     res.render('about', { title : 'about'});
// })
// app.get('/about-us', (req, res) => {
//     res.redirect('/about', { title : '404'}); // redirect to this path instead 
// })

// // 404 page
// // use method at the bottom of code, will run everytime there is a request (if the code reaches this point)
// // node only executes this code, when the others don't meet the condition
// // for eg. if user type in gibberish for the url path, none of the above GET matches
// // it'll reach here
// // after executing a redirect, node will stop reviewing the remaining code after that line
// app.use((res, req) => {
//     res.sendFile('./views/404.html', { root : __dirname })
//     // res.render('404', { title : '404' })
// })

const express = require('express');
const app = express();
app.listen(5000);
// var method = pm.request.method;
// //var protocol = pm.request.url.protocol;
// //var port = pm.request.url.port;
// //var host = pm.request.url.host;
// var protocol = "http";
// var host = "localhost";
// port = 5000;
// port = port ? ':' + port : "";
// var path = pm.request.url.path.join('/');
// var query = pm.request.url.query;
// var params_query = [];
// query.each(function(a) {
//     params_query.push(a.key + "=" + a.value);
// })
// params_query.sort(function(a, b) {
//     if (a.substring(0,1).toUpperCase() < b.substring(0,1).toUpperCase()) {
//         return -1;
//     }
// })

// var combinestring = protocol + "://" + host + port + "/" + path + "?" + params_query.join('&');

// var accountId = "123";
// var secretkey = "456";
// var currentdate = new Date();
// //var ts = 1616403536441;
// //var nonce = "4294967295" 
// var ts = currentdate.getTime();
// var nonce = Math.round(Math.random() * 4294967295 );

// combinestring = combinestring.replace("{{accountId}}", accountId);
// combinestring = combinestring.replace("{{nonce}}", nonce);
// combinestring = combinestring.replace("{{ts}}", ts);
// combinestring = method.toUpperCase() + "&" + combinestring.toLowerCase();

// var cryptojs = require('crypto-js');
// var hash = cryptojs.HmacSHA256(combinestring, secretkey);
// var hashInBase64 = cryptojs.enc.Base64.stringify(hash);
// //console.log(hashInBase64);

// // postman.setEnvironmentVariable("protocol", protocol);
// // postman.setEnvironmentVariable("host", host);
// // postman.setEnvironmentVariable("port", port);
// // postman.setEnvironmentVariable("accountId", accountId);
// // postman.setEnvironmentVariable("ts", ts);
// // postman.setEnvironmentVariable("nonce", nonce);
// // postman.setEnvironmentVariable("token", hashInBase64);
// // postman.setEnvironmentVariable("url", protocol + ":" + "//" + host + port);

// patchOpSchema = JSON.parse(pm.variables.get("patchop.schema.json"));

// processSchemaErrorMessage = function (schemaType, errors) {
//     if (errors) {
//         console.error(schemaType + " validation failed:");
//         for (var i = 0; i < errors.length; i++) {
//             var error = errors[i];
//             console.error(JSON.stringify(error));
//         }
//     } else {
//         console.info(schemaType + " validation passed.");
//     }
// }

// var Ajv = require('ajv');
// ajv = new Ajv({logger: console, allErrors: true});
