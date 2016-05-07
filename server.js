const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

router.get('/', function(ctx) {
  ctx.body = { online: true };
});

app
  .use(require('koa-helmet')())
  .use(router.routes())
  .use(router.allowedMethods())
;

app.listen(3000);