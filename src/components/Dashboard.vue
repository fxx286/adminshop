<!-- dashboard 的内容 -->
<template>
  <div class="admin-dashboard">
    <el-row>
      <!-- 左边菜单项的开始 -->
      <el-col :span="4" class="admin-dashboard-left">
        <el-menu background-color="#1f2d3d" text-color="#fff" :default-active="activeMenu" router>
          <el-menu-item index="dashboard">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="datamanage">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>数据管理</span>
            </template>

            <el-menu-item index="userlist">用户列表</el-menu-item>
            <el-menu-item index="shoplist">商家列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- 左边菜单项的结束 -->

      <!-- 右边菜单项的开始 -->
      <el-col :span="20" class="admin-dashboard-right">
        <router-view></router-view>
      </el-col>
      <!-- 右边菜单项的结束 -->
    </el-row>
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
      activeMenu: "dashboard"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route: {
      deep: true,
      handler: function(newRoute) {
        console.log(newRoute);
        let activeMenu = newRoute.path.slice(1); // dashboard
        console.log(newRoute.path);
        this.activeMenu = activeMenu;
      }
    }
  },
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
.admin-dashboard {
  .admin-dashboard-left {
    height: 100vh;
  }

  .admin-dashboard-right {
    height: 100vh;
    background: white;
  }
}
</style>