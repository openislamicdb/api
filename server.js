require('./env');
const app = require('./lib');

function cleanup(options) {
  return function(err) {
    if (options.cleanup) {
      app.context.dba.disconnect();
    }

    if (err) {
      console.error(err && err.stack ? err.stack : err);
    }

    if (options.exit) {
      process.exit();
    }
  };
}

process.on('exit', cleanup({ cleanup: true }));
process.on('SIGINT', cleanup({ exit: true }));

app.context.dba.connect().then(function() {
  app.listen(3000);
});

