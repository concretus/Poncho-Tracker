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

  it('response to /testpg', (done) => {
    request(server)
      .get('/testpg')
      .expect(200, done);
  });

  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});