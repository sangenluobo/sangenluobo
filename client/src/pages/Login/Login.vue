<template>
  <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <div class="login-logo">
          <img src="./images/logo8.png" alt="" width="250">
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>
          <!--账号登录部分-->
          <div class="current">
            <section>
              <section class="login-verification">
                <!--<input type="password" maxlength="18" placeholder="用户名" v-if="pwdMode" v-model="pwd">-->
                <input type="text" maxlength="18" placeholder="用户名" v-model="user_name">
                <!--<div class="switch-show">-->
                  <!--<img @click.prevent="dealPwdMode(false)" :class="{on: pwdMode}" src="./images/hide_pwd.png" alt=""-->
                       <!--width="20">-->
                  <!--<img @click.prevent="dealPwdMode(true)"  :class="{on: !pwdMode}" src="./images/show_pwd.png" alt=""-->
                       <!--width="20">-->
                <!--</div>-->
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="手机号码" v-model="user_phone">
              </section>
            </section>
          </div>
          <button class="login-submit" @click.prevent="login()">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {gLogin} from './../../api/index';
  import {Toast} from 'mint-ui';
  export default {
      name: "Login",
      data() {
        return {
          loginMode: true, // 登录方式, true 验证码登录 false 账号登录
          user_phone: '', // 手机号码
          countDown: 0, // 倒计时
          pwdMode: true, // 密码的显示方式 true 密文 false 明文
          pwd: '', // 密码
          code: '', // 验证码
          userInfo: {}, // 用户的信息
          user_name: '', // 用户名
          captcha: '',  // 图形验证码
        }
      },
      methods:
      {
        // 3. 密码的显示方式
        dealPwdMode(flag)
        {
          this.pwdMode = flag;
        },
        // 5. 登录
        async login() {
              // 5.4 前端校验
            if (!this.user_phone) {
              Toast("请输入手机!");
              return;
            } else if (!this.user_name) {
              Toast("请输入用户名!");
              return;
            }
            // 5.5 用户名和密码的登录
            const result = await gLogin(this.user_name, this.user_phone);
            if (result.data.success ) {//result.status === 200
              Toast("成功!");
              this.userInfo = result.message;
            } else {
              Toast("失败!");
              this.userInfo = {
                message: '登录失败, 手机号或验证码不正确!'
              };
            }



        }
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login-container
    width 100%
    height 100%
    background #fff
    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto
      .login-header
        .login-logo
          font-size 40px
          font-weight bold
          color mediumpurple
          text-align center
        .login-header-title
          padding-top 40px
          padding-bottom 10px
          text-align center
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.current
              color mediumpurple
              font-weight 700
              border-bottom 2px solid mediumpurple
      .login-content
        > form
          > div
            display none
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left 8px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid mediumpurple
            .login-message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get-verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.phone_right
                  color purple
            .login-verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch-show
                position absolute
                right 10px
                top 12px
                img
                  display none
                img.on
                  display block
          .login-submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background mediumpurple
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0

</style>
