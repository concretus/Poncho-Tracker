process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('API Routes', () =>{
  describe('GET /api/v1/pageview', function() {
    it('should return all pageview', function(done) {
      chai.request(server)
      .get('/api/v1/pageview')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json; // jshint ignore:line
        res.body.should.be.a('array');
        res.body.length.should.equal(4);
        res.body[0].should.have.property('name');
        res.body[0].name.should.equal('Suits');
        res.body[0].should.have.property('channel');
        res.body[0].channel.should.equal('USA Network');
        res.body[0].should.have.property('genre');
        res.body[0].genre.should.equal('Drama');
        res.body[0].should.have.property('rating');
        res.body[0].rating.should.equal(3);
        res.body[0].should.have.property('explicit');
        res.body[0].explicit.should.equal(false);
        done();
      });
    });
  });
});