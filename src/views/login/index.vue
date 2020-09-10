<template>
  <div class="login-form">
    <div class="b">
      <h2>UNI-ADMIN</h2>
    </div>
    <div>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item prop="username">
          <el-input v-model="form.username" size="medium" placeholder="请输入账号" class="u"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            size="medium"
            placeholder="请输入密码"
            class="p"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" @click="submitForm('form')" class="d">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginApi from "../../api/login";
export default {
  name: "",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入有效的账号", trigger: "blur" },
          // { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pass: [
          { required: true, message: "请输入有效的密码", trigger: "blur" },
          // { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          //调用登录接口
          loginApi
            .login(this.form.username,this.form.password)
            .then(res => {
              console.log(res);
              const code = res.status;
              if (code == 200) {
                //获取token
                const token = res.data.data.token;
                //吧token存储到本地
                localStorage.setItem("token", token);
                this.$router.push({path:"/"})
                // // //获取用户信息
                // loginApi.wxInfo().then(res => {
                //   console.log(res);
                //   const resp = res.status;
                //   if (resp.code == 200) {
                //     //将获取到的用户信息保存到本地
                //     localStorage.setItem("info", JSON.stringify(resp.rows));
                //     //跳转到首页
                //     this.$router.push({ path: "/" });
                //   } else {
                //     this.$message({
                //       message: "登录失败",
                //       type: "warning"
                //     });
                //   }
                // });
              } else {
                this.$message({
                  message: "登录失败",
                  type: "warning"
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit");
          return false;
        }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
/* .login-form {
  padding: 30px 50px 30px 30px;
  width: 350px;
  margin: 160px auto;
  border: #303133 solid 1px;
} */
/* .login-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599144330145&di=3e551bd7e681210da05fbddf71a7f6de&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170708%2F124d315588c441d08e6b6d1e072b7528_th.jpg");
  background-size: 100%;
} */
.login-form {
  padding: 30px 50px 30px 30px;
  width: 500px;
  margin: 160px auto;
  background: rgba(255, 255, 255, 0.5);
  border: #c1c3c5 solid 1px;
}
.login-form h2 {
  text-align: center;
  color: #777a80;
  /* border-bottom: 1px solid #c1c3c5; */
}
.b {
  width: 500px;
  margin-left: -29px;
  border-bottom: 1px solid #c1c3c5;
}
.u {
  width: 420px;
  margin-left: -70px;
  margin-top: 15px;
}
.p {
  width: 420px;
  margin-left: -70px;
  margin-top: 15px;
}
.d {
  width: 420px;
  margin-left: -70px;
  margin-top: 15px;
  background-color: rgb(30, 128, 123);
}
</style>