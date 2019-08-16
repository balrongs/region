import Regions from './services/region';
import Communes from './services/commune';
import Courts from './services/court';
import exception from './exception';
import PARAMETERS from './config/constants/parameters';

require('dotenv').config();
const Koa = require('koa');
const json = require('koa-json');
const Router = require('koa-router');

const router = new Router();
const app = new Koa();

app.use(exception());
app.use(json());

const regions = Regions();
const communes = Communes();
const courts = Courts();

router.get('/regions', async ctx => {
  const response = await regions.list(ctx);
  ctx.body = { data: response };
});

router.get('/regions/:region_id', async ctx => {
  const response = await regions.show(ctx);
  ctx.body = { data: response };
});

router.get('/communes', async ctx => {
  const response = await communes.list(ctx);
  ctx.body = { data: response };
});

router.get('/communes/:commune_id', async ctx => {
  const response = await communes.show(ctx);
  ctx.body = { data: response };
});
router.get('/courts', async ctx => {
  const response = await courts.list(ctx);
  ctx.body = { data: response };
});

router.get('/courts/:court_id', async ctx => {
  const response = await courts.show(ctx);
  ctx.body = { data: response };
});


app.use(router.routes()).use(router.allowedMethods());

const server = app.listen(PARAMETERS.DEFAULT_PORT);
console.log(`Server running on port ${server.address().port} ...`);

module.exports = server;
