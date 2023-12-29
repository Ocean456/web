<script lang="ts" setup>
</script>
<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>

  </div>
</template>
<style></style>