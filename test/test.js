var request = require('supertest');
var should = require('should');
var express = require('express');
var app = require('../app.js');

var agent = request('http://localhost:3000');

describe('Test routing', function () {
    it('GET /', function (done) {
        agent.get('/').expect(200, function(err, res){
            res.text.should.be.eql('Hello World!');
            done();
        });
    });
    it('POST /hello', function (done) {
        agent.post('/hello').expect(200, function(err, res){
            res.body.name.should.be.eql('hello');
            res.body.message.should.be.eql('I am message');
            done();
        });
    });
})