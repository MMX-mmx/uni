<template>
  <div class="navBar">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">后台首页</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-picture"></i>
        <span slot="title">相册管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier">
        <i class="el-icon-s-claim"></i>
        <span slot="title">商品列表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {}
};
</script>


<style scoped>
.el-menu{
  border-right: 0;
  height: 110%;
}
</style> 