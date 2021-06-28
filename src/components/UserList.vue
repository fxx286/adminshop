<!-- UserList 的页面 -->
<template>
<div class=''>
    <top-header></top-header>
    <el-table :data="tableData" style="height:647px;overflow-y:scroll">
      <el-table-column prop="name" label="用户姓名"></el-table-column>
      <el-table-column prop="phone" label="手机号码"></el-table-column>
      <el-table-column prop="company" label="工作地址"></el-table-column>
    </el-table>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TopHeader from '@/components/common/top-header'
import {getUserList} from '@/api'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    "top-header":TopHeader
},
data() {
//这里存放数据
return {
    tableData:[] // 表格中的数据
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
async created() {
    let res = await getUserList();
    console.log(res)
    this.tableData = res.result;
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

</style>