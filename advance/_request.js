var http = require('http');

module.exports = function(url){
    return new Promise(function(resolve, reject){

        var req = http.get(url, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));

        var bodyChunks = [];
        res.on('data', function(chunk) {
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);
            resolve(body);
        })
        });

        req.on('error', function(e) {
            reject('ERROR: ' + e.message);
        });

    })
}