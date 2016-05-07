const router = require('koa-router')({
  prefix: '/timelines'
});

router.post('/', function() {
  this.status = 204;
});

module.exports = router;