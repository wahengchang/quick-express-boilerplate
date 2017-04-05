var nock = require('nock');
var should = require('should');
var request = require('request');
describe('Mock HTTP', function() {
  var followersResponse = 'Hello World v2!';

  before(function() {
    nock('http://localhost:3000')
      .get('/')
      .reply(200, followersResponse);
  });

  after(function() {
    nock.cleanAll();
  });

  it('request mock HTTP', function(done) {

    request('http://localhost:3000/', function (error, response, body) {
        console.log('body: ', body)
        body.should.be.eql(followersResponse);
        done();
    });

  });
});
