const conn = require('./../../db/db');
const qurey = require('./../../db/qurey');
const Router = require('koa-router');
const router = new Router();
//const bcrypt = require('bcryptjs');
//const gravatar = require('gravatar');
//const tools = require('../../config/tools');
//const jwt = require('jsonwebtoken');
//const keys = require('../../config/keys');
//const passport = require('koa-passport');

// 引入User
//const User = require('../../models/User');

// 引入input验证
//const validateRegisterInput = require('../../validation/register');
//const validateLoginInput = require('../../validation/login');

/**
 * @route GET api/users/test
 * @desc  测试接口地址
 * @access 接口是公开的
 */
router.get('/test', async ctx => {
  ctx.status = 200;
  ctx.body = { msg: 'users works...' };
});

/**
 * @route POST api/users/register
 * @desc  注册接口地址
 * @access 接口是公开的
 */

router.post('/login', async ctx => {
  //  console.log(ctx.request.body);

    const user_name = ctx.request.body.user_name;
    const user_phone = ctx.request.body.user_phone;

    let sqlStr = "SELECT * FROM user_info WHERE user_name = '" + user_name + "' LIMIT 1";
  // let results;


   try {
     const  results = await qurey(sqlStr);
       if (results.length > 0) {
         if(results[0].user_phone != user_phone)
         {
             ctx.status =  404;
             ctx.body = { message: '手机号码错误' };
         }else{
             ctx.status = 200;
             ctx.body = { success: true}
         }
          // console.log(results[0].user_name);
       }else{
           ctx.status =  404;
           ctx.body = { message: '用户名找不到' };
       }


   }catch(err){
       ctx.status = err.status || 500;
       ctx.body = { message: err.message };
   }


    //console.log(results);
    return;
      conn.query(sqlStr, (error, results, fields) => {
        if (error) {
            //  res.json({err_code: 0, message: '用户名不正确!'});
            console.log('用户不存在!');
          //  ctx.status = 300;
          //  ctx.body = {user_name: '用户不存在!'};

        } else {
            results = JSON.parse(JSON.stringify(results));
            console.log(results[0]);
            ctx.status = 200;
            ctx.body = { msg: 'users works...' };
            /* if (results[0]) {  // 用户已经存在
                 // 验证密码是否正确
                 if (results[0].user_phone !== user_phone) {
                     ctx.status = 404;
                     ctx.body = {user_name: '电话不存在！'}
                 } else {
                     // req.session.userId = results[0].id;
                     // 返回数据给客户端

                     // res.json({
                     //   success_code: 200,
                     //   message: {
                     //     id: results[0].id,
                     //     user_name: results[0].user_name,
                     //     user_phone: results[0].user_phone
                     //   },
                     //   info: '登录成功!'
                 }
             } else{
                 ctx.status = 400;
                 ctx.body = { password: '密码错误!' };
             }

     */
        }
    });
});

module.exports = router.routes();
