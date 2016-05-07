"use strict";
exports.name = "Create Timeline Class";

exports.up = function (db) {
  db.class.create('Timeline');
};

exports.down = function (db) {
  db.class.drop('Timeline');
};

