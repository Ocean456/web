<script setup lang="ts">

import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";
import {getAttendanceByEmployeeId, getAttendanceConfig, updateAttendanceConfig} from "../axios";
import axios from "axios";
import {lazyAMapApiLoaderInstance, useGeolocation} from "@vuemap/vue-amap";

const requestUrl = 'https://restapi.amap.com/v3/geocode/regeo';
const config = ref()
const center = ref(config.value);
const address = ref()
const employeeId = ref()
const dateList = ref([])
const selectedDates = ref<string[]>([]);
const dialogVisible = ref(false);

const fetchAddress = () => {
  axios.get(requestUrl, {
    params: {
      key: 'b219252496476ae9018ccd805b60e08b',
      location: markerPosition.value ? markerPosition.value : center.value,
      extensions: 'base',
    }
  }).then(response => {
    address.value = response.data.regeocode.formatted_address;
  })
}

const fetchLocation = async () => {
  lazyAMapApiLoaderInstance.then(() => {
    useGeolocation({
      enableHighAccuracy: true,
      needAddress: true
    }).then(res => {
      const {getCurrentPosition} = res;
      getCurrentPosition().then(currentPosition => {
        center.value = currentPosition.position.toArray();
        return currentPosition;
      });
    })
  })
}
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

const loadConfig = () => {
  getAttendanceConfig()
      .then(response => {
        config.value = response.data;
        axios.get(requestUrl, {
          params: {
            key: 'b219252496476ae9018ccd805b60e08b',
            location: config.value.value,
            extensions: 'base',
          }
        }).then(response => {
          address.value = response.data.regeocode.formatted_address;
          center.value = config.value.value.split(',');
        })
      })
}

onMounted(() => {
  loadConfig();
})

const updateLocation = () => {
  center.value = markerPosition.value;
  fetchAddress();
}

const markerPosition = ref(null);

const handleMarkerDragEnd = (event: any) => {
  markerPosition.value = event.lnglat;
}

const updateConfig = () => {
  updateAttendanceConfig({
    id: 1,
    name: 'attendancePlace',
    value: center.value.toString()
  }).then(() => {
    ElMessage.success('修改成功');
    dialogVisible.value = false;
  })
}
const setLocation = async () => {
  await fetchLocation();
  markerPosition.value = center.value;
  fetchAddress();
}
</script>

<template>
  <div class="attendance">
    <el-button @click="dialogVisible =true" style=" float: right;margin-bottom: 10px" type="primary">考勤设置</el-button>
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
          {{ (data.day as string).split('-').slice(1).join('-') }}
          {{ selectedDates.includes(data.day) ? '✔️' : '' }}
        </p>
      </template>
    </el-calendar>
    <el-dialog title="考勤设置" v-model="dialogVisible">
      <el-form>
        <el-form-item label="考勤地点">
          <el-input v-model="address" disabled>
            <template #append>
              <el-button @click="updateLocation">修改</el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="map" style="margin-bottom: 20px">
        <el-amap :center="center" :zoom="15">
          <el-amap-marker @dragend="handleMarkerDragEnd" :position="center" :draggable="true" :raise-on-drag="true"
                          :visible="true"></el-amap-marker>
        </el-amap>
      </div>
      <el-button @click="setLocation">设置为当前位置</el-button>
      <el-button type="primary" @click="updateConfig">提交</el-button>
    </el-dialog>
  </div>
</template>

<style scoped>
.attendance {
  padding: 20px;
}

.map {
  height: 300px;
  width: auto;
}

</style>