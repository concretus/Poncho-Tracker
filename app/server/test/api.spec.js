process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const knex = require('../db_config/knex');

chai.use(chaiHttp);

describe('API Routes', () => {
  beforeEach(() => {
    return knex('users').del();
  });
  afterEach(() => {
    return knex('users').del();
  });

  describe('POST /api/v1/users', () => {
    it('should post to users', (done) => {
      const requestBody = {
        username: 'Michelle',
        password: '1234',
        email: 'michelle@gmail.com'
      };

      chai.request(server)
        .post('/api/v1/users')
        .send(requestBody)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('GET /api/v1/users', () => {
    it('should return all users', (done) => {
      chai.request(server)
      .get('/api/v1/users')
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
