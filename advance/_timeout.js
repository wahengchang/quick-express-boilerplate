
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('_timeout', function(req, res, next){
    res.send('time out ... ')
});

module.exports = {
    _setTimeout : function (_s) {
        return function (req, res, next) {
            next()
            setTimeout(function(){
                eventEmitter.emit('_timeout', req, res, next);
            }, _s)
        }
    }, 
    _setupTimeoutConfig :  function(req, res, next) {
        var temp = res.send
        res.send = function() {
            if(!res.headersSent)
                temp.apply(this,arguments);
        }
        next();
    }
}

/*
var _setTimeout = require('./timeout.js')._setTimeout
var _setupTimeoutConfig = require('./timeout.js')._setupTimeoutConfig

app.use(_setupTimeoutConfig)

app.get('/timeout/1s', _setTimeout(1000), function(req, res, next){
  res.json( ... )
});
*/