var express = require('express');
var app = express();

app.use(function(req, res, next){
    res.header("Content-Security-Policy", 
                "default-src 'self';"+
                "script-src 'self';"+
                "object-src 'none';"+
                "img-src 'self';"+
                "media-src 'self';"+
                "frame-src 'none';"+
                "font-src 'self' data:;"+
                "connect-src 'self';"+
                "style-src 'self'");
    next();
});

app.get('/', function(req, res){
    res.send(`
    <html>
    <body>
        <p>hello world</p>
        <script type='text/javascript'>
            alert('got you')
        </script>
    </body>
    <html>`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
