<script setup lang="ts">

// import MapContainer from "../components/MapContainer.vue";
import {lazyAMapApiLoaderInstance, useGeolocation} from "@vuemap/vue-amap";
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {getAttendanceByEmployeeId} from "../axios";

const center = ref(null)
const fetchLocation = () => {
  lazyAMapApiLoaderInstance.then(() => {
    useGeolocation({
      enableHighAccuracy: true,
      needAddress: true
    }).then(res => {
      const {getCurrentPosition} = res;
      getCurrentPosition().then(currentPosition => {
        center.value = currentPosition.position.toArray();
        ElMessage.success('定位成功' + currentPosition.formattedAddress);
        return currentPosition;
      });
    })
  })
}




const employeeId = ref()
const dateList = ref([])
const selectedDates = ref([]);
const search = () => {
  getAttendanceByEmployeeId(employeeId.value)
      .then(response => {
        dateList.value = response.data;
        selectedDates.value = dateList.value.map(date => {
          const formattedDate = new Date(date);
          return `${formattedDate.getFullYear()}-${(formattedDate.getMonth() + 1).toString().padStart(2, '0')}-${formattedDate.getDate().toString().padStart(2, '0')}`;
        });
      })

}
</script>

<template>
  <div class="attendance">
    <!--    <h1>Attendance</h1>-->
    <!--        <el-button @click="fetchLocation"> 打卡</el-button>-->
    <div class="div">
      <el-input v-model="employeeId" @keydown.enter placeholder="请输入员工号">
        <template #append>
          <el-button type="primary" @click="search">搜索</el-button>
        </template>
      </el-input>

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
.attendance {
  padding: 20px;
}
</style>