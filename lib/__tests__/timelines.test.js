const supertest = require('supertest');
const app = require('../');

describe('/timelines', function() {
  describe('[POST] /', function() {
    it('creates a new timeline', function(done) {
      supertest(app.listen())
        .post('/timelines')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ title: 'Hello World!' })
        .expect(204, done)
      ;
    });
  });
});