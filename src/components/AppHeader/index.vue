<template>
  <div class="header">
    <div class="logo">
      <router-link class="link" :to="{path : '/'}">

        <span class="company">UNI-ADMIN</span>
      </router-link>
    </div>
    <div class="luy">
      <el-menu
      :router="true"
      :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/goods">商品</el-menu-item>
        <el-menu-item index="/the">订单</el-menu-item>
        <el-menu-item index="/members">会员</el-menu-item>
        <el-menu-item index="/setupthe">设置</el-menu-item>
      </el-menu>
    </div>
    <div class="info">
      <el-dropdown @command="handle">
        <span class="el-dropdown-link">
          {{name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="changePass">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="checkOut">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: ""
    };
  },
  created() {
    const info = JSON.parse(localStorage.getItem("mx_info"));
    this.name = info.name !== "undefined" ? info.name : "";
  },
  components: {},
  methods: {
    handle(command) {
      console.log(command);
      switch (command) {
        case "changePass":
          this.changePass();
          break;
        case "checkOut":
          this.checkOut();
          break;
      }
    },
    changePass() {
      console.log("修改密码");
    },
    checkOut() {
      //清除本地存储的token
      localStorage.removeItem("mx_token");
      //清除本地存储的信息
      localStorage.removeItem("mx_info");
      //跳转到登录页面
      this.$router.push("/login");
      console.log("退出登录");
    }
  }
};
</script>


<style scoped>
.header .logo {
  padding-left: 40px;
  float: left;
}
.header .logo img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.header .logo .link {
  text-decoration: none;
  color: #fff;
}
.header .logo .company {
  margin-left: 10px;
  font-size: xx-large;
}
.header .info {
  float: right;
  padding-right: 40px;
}
.header .el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.header .luy{
  float: left;
  margin-left: 1150px;
}
</style> 