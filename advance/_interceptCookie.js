var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log('GET request ... ');
    next();
})

app.get('/', function(req, res){
    res.send(`
    <html>
    <body>
        <p>hello world</p>
        <p>cookie: ${req.headers.cookie}</p>
    </body>
    <html>`);
});


app.get('/get/cookie', function(req, res){
    res.send(`
    <html>
    <body>
        <p>cookie: ${req.headers.cookie}</p>
    </body>
    <html>`);
});


app.get('/set/cookie', function(req, res){
    res.cookie('cookieName',Math.random().toString(), { maxAge: 900000, httpOnly: true });
    res.send(`
    <html>
    <body>
        <p>cookie: ${req.headers.cookie}</p>
    </body>
    <html>`);
});



app.get('/pass/cookie/1', function(req, res){
    res.cookie('cookieName',Math.random().toString(), { maxAge: 900000, httpOnly: true });
    res.send('ok');
});

app.get('/pass/cookie/2', function(req, res){
    console.log('req.headers.cookie: ', req.headers.cookie)
    res.send('coming with cookie: ', req.headers.cookie);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
