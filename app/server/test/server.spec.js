const request = require('supertest');

describe('loading express', function() {
  let server;
  beforeEach(() => {
    server = require('../server');
  });
  afterEach(() => {
    server.close();
  });

  it('response to /', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('302 redirect everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(302);

    request(server)
      .get('/whatever')
      .expect(302, done);
  });
});