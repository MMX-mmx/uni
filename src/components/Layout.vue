<template>
  <div>
    <!-- 头部 -->
    <AppHeader />
    <!-- 侧边栏 -->
    <AppNavBar></AppNavBar>
    <!-- 主体 -->
    <AppMain></AppMain>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppNavBar from "./AppNavBar";
import AppMain from "./AppMain";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppNavBar,
    AppMain
  }
};
</script>


<style scoped>
.header {
  height: 50px;
  line-height: 50px;
  position: absolute;
  right: 0;
  left: 0;
  background-color: rgb(84, 92,100);
}
.navBar {
  width: 240px;
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
  height: 100%;
}
.main {
  position: absolute;
  left: 240px;
  right: 0;
  top: 50px;
  bottom: 0;
  background-color: rgb(206, 202, 202);
}
</style>