const Koa = require('koa');
const router = require('koa-router');
const app = new Koa();
var mongoose = require('mongoose');

var route = router();
mongoose.connect('mongodb://localhost/meanApp', {useNewUrlParser: true});

route.get('/', (ctx) => {
  ctx.body = 'Hello Koajs';
});

route.get('/users', (ctx) => {
  ctx.body = 'Hello user';
});

app.use(route.routes());
app.listen(3000);