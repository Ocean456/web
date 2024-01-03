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
        <transition>
          <component :is="Component"/>
        </transition>
      </router-view>
    </el-config-provider>

  </div>
</template>
<style></style>