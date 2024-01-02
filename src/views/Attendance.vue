<script setup lang="ts">

// import MapContainer from "../components/MapContainer.vue";
import {lazyAMapApiLoaderInstance, useGeolocation} from "@vuemap/vue-amap";
import {ref} from "vue";
import {ElMessage} from "element-plus";

const center = ref(null)
const fetchLocation = () => {
  lazyAMapApiLoaderInstance.then(() => {
    lazyAMapApiLoaderInstance.then(() => {
      useGeolocation({
        enableHighAccuracy: true,
        needAddress: true
      }).then(res => {
        const {getCurrentPosition} = res;
        getCurrentPosition().then(currentPosition => {
          center.value = currentPosition.position.toArray();
          ElMessage.success('定位成功' + currentPosition.formattedAddress);
        });
      })
    })
  })
}

</script>

<template>
  <div>
    <h1>Attendance</h1>
        <el-button @click="fetchLocation"> 打卡</el-button>
  </div>
</template>

<style scoped>

</style>