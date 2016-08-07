process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const knex = require('../db_config/knex');

chai.use(chaiHttp);

// Need to clear tables before each test block
const clearTables = (done) => {
  knex('rfis').del()
  .then(() => knex('users').del())
  .then(() => done())
  .catch((err) => console.log(err));
};

const michelle = {
  id: 1,
  name: 'Michelle He',
  username: 'michelleheh',
  password: '1234',
  email: 'michelle@gmail.com'
};

const jonarnaldo = {
  id: 2,
  name: 'Jon Arnaldo',
  username: 'jonarnaldo',
  password: '1234',
  email: 'ja@gmail.com'
};

const RFI01 = {
  id: 1,
  rfi_number: 1,
  date_created: '2016-01-01 00:00:00',
  date_due: '2016-01-15 00:00:00',
  title: 'Foundation Concrete Grade',
  question: 'What is the concrete grade? \n please confirm',
  created_by: 1
};

const RFI01_1 = {
  id: 2,
  rfi_number: 1.1,
  date_created: '2016-01-01 00:00:00',
  date_due: '2016-01-15 00:00:00',
  title: 'Foundation Concrete Grade',
  question: 'What is the concrete grade? \n please confirm',
  related_rfi: 1,
  created_by: 1
};

describe('API Routes users', () => {
  beforeEach((done) => {
    clearTables(done);
  });
  describe('POST /api/v1/users', () => {
    it('should post to users', (done) => {
      chai.request(server)
        .post('/api/v1/users')
        .send(michelle)
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
      knex('users').insert(michelle)
        .catch((error) => console.log('error: ', error))
        .then(() => knex('users').insert(jonarnaldo))
        .then(() => {
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
});

describe('API Routes RFIs', () => {

  beforeEach((done) => {
    clearTables(done);
  });



  describe('POST /api/v1/RFIs', () => {
    it('should post a single RFI', (done) => {
      knex('users').insert(michelle)
        .catch((error) => console.log('error: ', error))
        .then(() => {
          chai.request(server)
            .post('/api/v1/RFIs')
            .send(RFI01)
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              done();
            });
        });
    });

    it('should post a related RFI', (done) => {
      knex('users').insert(michelle)
        .catch((error) => console.log('error: ', error))
        .then(() => knex('rfis').insert(RFI01))
        .then(() => {
          chai.request(server)
            .post('/api/v1/RFIs')
            .send(RFI01_1)
            .end((err, res) => {
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              done();
            });
        });
    });
  });

  describe('GET /api/v1/RFIs', () => {    
    it('should get RFI by id', (done) => {
      knex('users').insert(michelle)
      .then(() => knex('rfis').insert(RFI01))
      .then(() => {
        chai.request(server)
        .get('/api/v1/RFIs/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.length.should.equal(1);
          res.body[0].rfi_number.should.equal('1');
          res.body[0].date_created.should.not.equal(null);
          res.body[0].date_due.should.not.equal(null);
          res.body[0].question.should.equal('What is the concrete grade? \n please confirm');
          res.body[0].title.should.equal('Foundation Concrete Grade');
          res.body[0].created_by.should.equal(1);
          done();
        });
      });
    });
  });
});

