'use strict';

const koa = require('koa');
const router = require('koa-router')();
const DBAdapter = require('./DBAdapter');
const app = koa();

router.get('/', function() {
  this.body = { online: true };
});

app.context.dba = DBAdapter();
app
  .use(require('koa-bodyparser')({
    strict: true,
    formLimit: 0,
  }))
  .use(require('koa-helmet')())
  .use(require('./TimelinesAPI').routes())
  .use(router.routes())
  .use(router.allowedMethods())
;

module.exports = app;
