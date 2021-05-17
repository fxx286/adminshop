<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  created() {
    this.$http.get("admin/info").then(res => {
      // console.log(res.data); // 把 data 去掉
      console.log(res);
    });
  }
};
</script>
<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  background-color: var(--bgColor);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  --bgColor: #324057;
}
</style>
