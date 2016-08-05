process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const knex = require('../db_config/knex');

chai.use(chaiHttp);

describe('API Routes', () => {
  beforeEach(() => {
    return knex('pageview').del();
  });
  afterEach(() => {
    return knex('pageview').del();
  });

  describe('POST /api/v1/pageview', () => {
    it('should post to pageview', (done) => {
      const views = [1, 2, 3];
      views.forEach((id) => {
        chai.request(server)
          .post('/api/v1/pageview')
          .send({uid: id})
          .end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            if (id === views.length) done();
          });
      });
    });
  });

  describe('GET /api/v1/pageview', () => {
    it('should return all pageview', (done) => {
      chai.request(server)
      .get('/api/v1/pageview')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(0);
        // res.body[2].should.have.property('uid');
        // res.body[2].uid.should.equal(3);
        done();
      });
    });
  });
});
