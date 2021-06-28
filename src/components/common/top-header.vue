<!-- 面包屑 -->
<template>
  <div class="top-header">
    <div class="top-header-left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(meta) in $route.meta"
          :key="meta.key"
          :to="{path:meta.path}"
        >{{meta.text}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-header-right">
      <el-dropdown @command="handleCommand" trigger="hover">
        <span class="el-dropdown-link">
          <img :src="defaultProfile" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="index">首页</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import defaultProfile from "@/assets/default.jpg";
// import myaxios from "../shopaixos/shopaxios"
// import { logout } from "@/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      defaultProfile: defaultProfile
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleCommand: function(command) {
      if (command === "index") {
        this.$router.push("/dashboard");
      } else if (command === "logout") {
        // 调用退出接口
        this.$http.get("signout").then(res => {
          console.log(res);
        });
        // logout();
        this.$router.push("/");
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.$route);
  },
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
<style lang="less" scoped>
.top-header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f7;
  padding: 0 10px;
  .top-header-left {
  }
  .top-header-right {
    img {
      border-radius: 50%;
      width: 36px;
      height: 36px;
    }
  }
}
</style>