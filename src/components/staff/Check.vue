<script setup lang="ts">


import {lazyAMapApiLoaderInstance, useGeolocation} from "@vuemap/vue-amap";
import {onMounted, ref} from "vue";
import {getAttendanceConfig, setAttendance} from "../../axios";
import {useUserStore} from "../../store";
import axios from "axios";
import {ElMessage} from "element-plus";

const isLoading = ref(true)

const center = ref()
const userStore = useUserStore();
const requestUrl = 'https://restapi.amap.com/v3/distance?parameters'

const fetchLocation = async () => {
  lazyAMapApiLoaderInstance.then(() => {
    useGeolocation({
      enableHighAccuracy: true,
      needAddress: true
    }).then(res => {
      const {getCurrentPosition} = res;
      getCurrentPosition().then(currentPosition => {
        center.value = currentPosition.position.toArray();
        axios.get(reqAddress, {
          params: {
            key: 'b219252496476ae9018ccd805b60e08b',
            location: place.value,
            extensions: 'base',
          }
        }).then(response => {
          attendanceAddress.value = response.data.regeocode.formatted_address;
          isLoading.value = false
        })
        return currentPosition;
      });
    })
  })
}
const reqAddress = 'https://restapi.amap.com/v3/geocode/regeo'

const place = ref()
const distance = ref(0)

onMounted(() => {
  getAttendanceConfig().then((res) => {
    place.value = res.data.value
  })
})

const location = ref()
const check = async () => {
  location.value = center.value.toString()
  console.log(location.value, place.value)
  await axios.get(requestUrl, {
    params: {
      key: 'b219252496476ae9018ccd805b60e08b',
      origins: location.value,
      destination: place.value,
      type: 1
    }
  }).then((res) => {
    distance.value = res.data.results[0].distance
    console.log(distance.value)
  })

  if (distance.value > 100) {
    axios.get(reqAddress, {
      params: {
        key: 'b219252496476ae9018ccd805b60e08b',
        location: location.value,
        extensions: 'base',
      }
    }).then(response => {
      address.value = response.data.regeocode.formatted_address;
      ElMessage.warning("不在考勤范围内，当前位置：" + address.value)
    })
  } else {

    setAttendance(userStore.account).then(() => {
      ElMessage.success("签到成功")
    }).catch(() => {
      ElMessage.error("签到失败")
    })
  }
}
onMounted(async () => {
  await fetchLocation()

})

const address = ref()
const attendanceAddress = ref()
</script>

<template>
  <div v-loading="isLoading">
    <div>
      <el-text>考勤地点 :{{ attendanceAddress }}</el-text>
    </div>
    <el-button @click="check">
      签到
    </el-button>

  </div>
</template>

<style scoped>

</style>