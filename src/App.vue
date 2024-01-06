<script lang="ts" setup>
import {reactive} from "vue";
import zhCn from 'element-plus/es/locale//lang/zh-cn.mjs';

const locale = zhCn

const config = reactive({
  max: 3,
})
</script>
<template>
  <div id="app">
    <el-config-provider :message="config" :locale="locale">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"/>
        </transition>
      </router-view>
    </el-config-provider>
  </div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter , .fade-leave-to {
  opacity: 0;
}
</style>