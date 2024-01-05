<script setup lang="ts">


import {lazyAMapApiLoaderInstance, useGeolocation} from "@vuemap/vue-amap";
import {ref} from "vue";

const center = ref()

const fetchLocation = () => {
  lazyAMapApiLoaderInstance.then(() => {
    useGeolocation({
      enableHighAccuracy: true,
      needAddress: true
    }).then(res => {
      const {getCurrentPosition} = res;
      getCurrentPosition().then(currentPosition => {
        center.value = currentPosition.position.toArray();
        // address.value = currentPosition.formattedAddress;
        // ElMessage.success('定位成功' + currentPosition.formattedAddress);
        return currentPosition;
      });
    })
  })
}
</script>

<template>
  <div>
    <el-button @click="fetchLocation">

    </el-button>
  </div>
</template>

<style scoped>

</style>