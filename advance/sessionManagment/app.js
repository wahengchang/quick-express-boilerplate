var express = require('express')
var session = require('express-session');

var app = express();


app.set('trust proxy', 1); // Trust first proxy

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: '...',
    cookie: {
        httpOnly: true, // Prevent cookie accessed by JavaScript code
        secure: true, // Prevent browser sending cookie on unencrypted
                    // connection
        maxAge: 1 * 60 * 1000 // 10 minutes
    }
}));


app.use((req, res, next)=>{
    console.log('req.headers.cookie: ', req.headers.cookie)
    next();
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


app.get('*', function(req, res){
    res.send(`
    <html>
    <body>
        <p>cookie: ${req.headers.cookie}</p>
    </body>
    <html>`);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
