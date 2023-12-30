<script setup lang="ts">

</script>

<template>
  <div>
    <h1>员工界面</h1>
    <router-link to="/staff/home">员工首页</router-link>
    <router-link to="/staff/prefect">信息完善</router-link>
    <router-link to="/staff/adjust">宿舍调整</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>