<script setup lang="ts">
import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
import router from "../router";
import {login} from "../axios";
import {useUserStore} from "../store";

const form = ref({
  username: "",
  password: "",
});

const userStore = useUserStore();

const cardWidth = ref('50%');

const handleLogin = () => {
  if (form.value.username === "" || form.value.password === "" || form.value.username.length !== 11 || form.value.password.length < 6) {
    ElMessage.warning("请输入正确的账号密码");
    return;
  }
  login(form.value).then((res: any) => {
    if (res.status === 200) {
      ElMessage.success("登录成功");
      userStore.login(res.data.username, res.data.role);
      if (res.data.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/staff");
      }
    } else {
      ElMessage.error("账号或密码错误");
    }
  });
};

onMounted(() => {
  const adjustCardWidth = () => {
    if (window.innerWidth > 1200) {
      cardWidth.value = '50%';
    } else if (window.innerWidth > 800) {
      cardWidth.value = '70%';
    } else {
      cardWidth.value = '100%';
    }
  };

  window.addEventListener('resize', adjustCardWidth);
  adjustCardWidth();
});

</script>
<template>
  <el-container>
    <div style="width: 50%;float: left;text-align: center;color: white" >
      <h1>员工信息管理系统</h1>
    </div>
    <el-card :style="{width:cardWidth}">
      <el-form>
        <el-header>
          <h1>登录</h1>
        </el-header>
        <el-form-item>
          <el-input placeholder="账号" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="密码" @keydown.enter="handleLogin" v-model="form.password"></el-input>
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5C8374;
}


.el-header {
  text-align: center;

}

.el-card {
  height: 100vh;
  border: 0;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1B4242;
  color: #9EC8B9;
}

.el-form {
  width: 300px;
}

.el-button {
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
}


.el-button {
  background-color: transparent;
  border-color: #5C8374;
  width: 100%;
  margin-top: 20px;
}

.el-button:hover {
  background-color: #9EC8B9;
}

:deep(.el-input__wrapper) {
  background-color: transparent;
  box-shadow: none;
  border-bottom: whitesmoke 1px solid;
  border-radius: 0;
  padding: 0;
  font-size: 18px;
  height: 40px;
}

:deep(.el-input__inner) {
  color: #9EC8B9;
}

:deep(.el-input__inner[type = "password"]) {
  letter-spacing: 3px;
}
</style>
