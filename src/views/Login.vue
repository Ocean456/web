<script setup lang="ts">
import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
import router from "../router";
import {login} from "../axios";

const form = ref({
  username: "",
  password: "",
});

const handleLogin = () => {
  login(form.value).then((res: any) => {
    if (res.status === 200) {
      ElMessage.success("登录成功");
      router.push("/admin");
    } else {
      ElMessage.error("登录失败");
    }
  });
};

onMounted(() => {
  document.body.style.backgroundImage = 'url("src/assets/wave.svg")'
});
</script>

<template>
  <el-container>
    <el-card>
      <el-form label-width="60">
        <el-header>
          <h1>登录</h1>
        </el-header>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input @keydown.enter="handleLogin" v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form>
    </el-card>
  </el-container>
</template>

<style scoped>
* {
  user-select: none;
}

.el-container {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65vw;
  margin: auto;
}

.el-header {
  text-align: center;
}

.el-card {
  width: 400px;
  margin: 100px auto;
}

.el-button {
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
}

.el-input {
  width: 300px;
  margin-right: 20px;
}
</style>