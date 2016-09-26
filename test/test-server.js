var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');


var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('server', function() {
    it('should return status 200', function(done) {
        chai.request(app)
        	.get('/')
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                res.should.be.html;
                done();
            })

    });

    it('should return status 200', function(done) {
        chai.request(app)
        	.get('/recipes')
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                res.should.be.html;
                res.body.should.be.a('object');
                
            }).then(done());

    });

});