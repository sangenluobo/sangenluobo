const koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
//const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
//const passport = require('koa-passport');

// 实例化koa
const app = new koa();
const router = new Router();



app.use(bodyParser());
app.use(cors());
// 引入users.js
const users = require('./routes/api/users');
//const profile = require('./routes/api/profile');
//const posts = require('./routes/api/posts');

// 路由
router.get('/', async ctx => {
  ctx.body = { msg: 'Hello Koa Interfaces' };
});

// config
//const db = require('./config/keys').mongoURI;



//app.use(passport.initialize());
//app.use(passport.session());

// 回调到config文件中 passport.js
//require('./config/passport')(passport);

// 配置路由地址localhost:5000/api/users
router.use('/api/users', users);
//router.use('/api/profile', profile);
//router.use('/api/posts', posts);

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
