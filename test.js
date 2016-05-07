require('./env');
const app = require('./lib');

before(function(done) {
  app.context.dba.connect().then(function() {
    done();
  }, done);
});

after(function(done) {
  app.context.dba.disconnect().then(function() {
    done();
  }, done);
});