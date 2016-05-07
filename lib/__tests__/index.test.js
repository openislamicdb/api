const supertest = require('supertest');
const app = require('../');

describe('server', function() {
  describe('[GET] /', function() {
    it('works', function(done) {
      supertest(app.listen())
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200, { online: true }, done)
      ;
    });
  });

  it('bails with 405 Method Not Allowed on unknown methods', function(done) {
    supertest(app.listen())
      .post('/')
      .expect(405, done)
    ;
  });
});