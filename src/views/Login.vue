<!-- 登录 的内容 -->
<template>
  <div class="admin-login">
    <h1>后台管理系统</h1>
    <div class="admin-login-form">
      <el-form :model="formData" :rules="rules">
        <el-form-item>
          <el-input v-model="formData.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="formData.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-form-button">登录</el-button>
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
      rules: {}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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