<script setup lang="ts">
import router from "../../router";
import {useUserStore} from "../../store";

const handleLogout = () => {
  const userStore = useUserStore()
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <div>
    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>

<style scoped>

</style>