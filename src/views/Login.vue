<!-- 登录 的内容 -->
<template>
  <div class="admin-login">
    <h1>后台管理系统</h1>
    <div class="admin-login-form">
      <el-form :model="formData" :rules="rules" ref="submitForm">
        <el-form-item prop="username">
          <el-input v-model="formData.username" placeholder="用户名" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="formData.password"
            placeholder="密码"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-form-button"
            @click.stop="handleSubmit('submitForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>
      <!-- 温馨提示 -->
      <div class="login-tip">
        <p>温馨提示</p>
        <p>未登录过的新用户，自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import CryptoJS from "crypto-js";
// Base64.stringify(hmacSHA512(path + hashDigest, privateKey))

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 表单数据
      formData: {
        username: "",
        password: ""
      },
      // 规则
      rules: {
        username: [
          {
            required: true, // 必填
            message: "输入用户名有误", // 提示信息
            trigger: "blur" // 触发条件：失焦
          },
          {
            min: 6,
            max: 13,
            message: "长度在6-13",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请您输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSubmit: function(name) {
      // console.log(this.formData);
      this.$refs[name].validate((valid, obj) => {
        console.log(valid, obj);
        let password = this.formData.password;
        let username = this.formData.username;
        // AES 对称加密 加密和解密都是同一把密钥
        // password = CryptoJS.AES.decrypt(password, 'adminshop');
        password = CryptoJS.HmacSHA1(password, "adminshop").toString();
        console.log(username, password);
        this.$http
          .post("admin/login", {
            user_name: username,
            password
          })
          .then(res => {
            console.log(res);
            if (res.status === 1) {
              // 路由跳转到 dashboard
              // 存储登录的信息扥方式
              // 1.status => LocalStorage
              // 2.status => cookies
              // 3.status => vuex
              // router => this.$router
              // vuex => this.$store
              console.log(this.$store);
              // vuex 同步修改 状态中的数据
              this.$store.commit("LOGIN", res.status);
              this.$router.push("dashboard");
            }
          });
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.admin-login {
  margin: 0 auto;
  width: 300px;
  height: 400px;
  padding-top: 300px;
  h1 {
    text-align: center;
    font-weight: 300;
    color: white;
    margin-bottom: 11px;
  }
  .admin-login-form {
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    .login-form-button {
      width: 100%;
    }
    .login-tip {
      color: red;
      text-align: center;
      font-size: 0.75em;
    }
  }
}
</style>