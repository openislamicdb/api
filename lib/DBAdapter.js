'use strict';

const assert = require('assert');
const OrientDB = require('orientjs');

module.exports = function DBAdapter() {
  const exports = {};
  let client;

  exports.connect = function() {
    assert(!client);

    client = new OrientDB.ODatabase({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_NAME,
    });

    return client.open();
  };

  exports.disconnect = function() {
    assert(client);

    return client.close().then(function() {
      client = null;
    });
  };

  return exports;
};