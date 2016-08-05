process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('API Routes', () => {
  describe('GET /api/v1/pageview', function() {
    it('should return all pageview', function(done) {
      chai.request(server)
      .get('/api/v1/pageview')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(2);
        res.body[0].should.have.property('uid');
        res.body[0].uid.should.equal(1);
        done();
      });
    });
  });
});