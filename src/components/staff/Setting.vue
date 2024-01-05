<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import axios from "axios";
import {ElMessage} from "element-plus";
import {useUserStore} from "../../store"
import router from "../../router";

const userStore = useUserStore()

const handleLogout = () => {
  const userStore = useUserStore()
  userStore.logout()
  router.push('/login')
}
const spring = axios.create({
  baseURL: 'http://localhost:9090/api'
})
const account = ref({
  username: userStore.account,
  newpassword: ''
})
const password = ref('')
let status = ref(false)
const change = () => {
  status.value = true
}
const exit = () => {
  status.value = false
}
let number = ref('')
const load = async () => {
  await spring.get('/getpassword', {params: {username: account.value.username}})
      .then(response => {
        number.value = response.data
      })
}
const submit = () => {
  console.log(number.value)
  console.log(password.value)
  if (password.value == "" || account.value.newpassword == "") {
    ElMessage.warning('请填写所有数据')
  }
  if (password.value != number.value) {
    ElMessage.warning('请填写正确的原始密码')
  }
  if (password.value == number.value && account.value.newpassword.length > 0) {
    console.log(1)
    spring.post('/updateuser', {username: account.value.username, password: account.value.newpassword})
        .then(response => {
          ElMessage({
            message: "操纵成功",
            type: "success"
          })
        })
  }
}
onMounted(async () => {
  await load()
})
</script>

<template>
  <div>
    <div>
      <el-button type="primary" @click="change" v-if="status===false">修改密码</el-button>
    </div>
    <div v-if="status">
      <el-form label-width="110px">
        <el-form-item v-model="account" label="用户名">
          <el-input v-model="account.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="原始密码">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item v-model="account" label="新密码">
          <el-input v-model="account.newpassword"></el-input>
        </el-form-item>
        <div style="display:flex;">
          <el-button type="primary" @click="submit" style="margin-left: 50px">确认</el-button>
          <el-button type="primary" @click="exit">返回</el-button>
        </div>
      </el-form>


    </div>
    <el-button style="margin-top: 20px" @click="handleLogout">退出登录</el-button>
  </div>
</template>


<style scoped>

</style>