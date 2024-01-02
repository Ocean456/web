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

import axios from "axios";
const spring = axios.create({
  baseURL: 'http://localhost:9090/api'
})

const number=ref('')
const datelist=ref([])
const selectedDates = ref([]);
const search=()=>{
  spring.get('/getdate',{params:{id:number.value}})
      .then(response=>{
        datelist.value=response.data;
        selectedDates.value = datelist.value.map(date => {
          const formattedDate = new Date(date);
          return `${formattedDate.getFullYear()}-${(formattedDate.getMonth() + 1).toString().padStart(2, '0')}-${formattedDate.getDate().toString().padStart(2, '0')}`;
        });
      })

}
</script>

<template>
  <div>
    <h1>Attendance</h1>
        <el-button @click="fetchLocation"> 打卡</el-button>
    <div class="div">
      <el-input v-model="number" placeholder="请输入员工号"></el-input>
      <el-button type="primary" @click="search">查询</el-button>
    </div>

    <el-calendar>
      <template #date-cell="{ data }">
        <p>
          {{ data.day.split('-').slice(1).join('-') }}
          {{ selectedDates.includes(data.day) ? '✔️' : '' }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<style scoped>

</style>