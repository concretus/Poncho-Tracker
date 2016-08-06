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
        name: 'Michelle',
        username: 'michelleheh',
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
    it('should return no user when table is empty', (done) => {
      chai.request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(0);
        done();
      });
    });

    it('should return all users when table is NOT empty', (done) => {
      const michelle = {
        name: 'Michelle He',
        username: 'michelleheh',
        password: '1234',
        email: 'michelle@gmail.com'
      };

      const jonarnaldo = {
        name: 'Jon Arnaldo',
        username: 'jonarnaldo',
        password: '1234',
        email: 'ja@gmail.com'
      };
      
      knex('users').insert(michelle).catch((error) => console.log('error: ', error));
      knex('users').insert(jonarnaldo).catch((error) => console.log('error: ', error));

      chai.request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(2);
        res.body[0].name.should.equal('Michelle He');
        res.body[0].created_at.should.not.equal(null);
        res.body[1].name.should.equal('Jon Arnaldo');
        res.body[1].created_at.should.not.equal(null);
        done();
      });
    });
  });
});
