<template>
  <div id="sign_wrap">
    <h1>后台管理</h1>
    <el-input v-model="name" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
    <el-button @click="signup">注册</el-button>
    <el-button type="primary" @click="signin">登录</el-button>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return { title: "登录" };
  },
  data() {
    return {
      name: "",
      password: "",
      hasName: false // 用户名被占
    };
  },
  mounted: function() {},
  methods: {
    signup: function() {
      let _this = this;
      if (this.name.length < 6) {
        this.$message.error("用户名不能为空或小于六个字符");
        return;
      }

      if (this.password.length < 6) {
        this.$message.error("密码不能为空或小于六个字符");
        return;
      }
    },
    signin: function() {
      let _this = this;
      if (this.name.length < 6) {
        this.$message.error("用户名不能为空或小于六个字符");
        return;
      }

      if (this.password.length < 6) {
        this.$message.error("密码不能为空或小于六个字符");
        return;
      }
    }
  }
};
</script>

<style>
#sign_wrap {
  width: 300px;
  margin: 200px auto;
  text-align: center;
}

#sign_wrap h1 {
  color: #383a42;
  font-size: 25px;
  padding: 10px;
}

#sign_wrap div {
  padding-bottom: 20px;
}
</style>