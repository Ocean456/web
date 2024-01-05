<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import axios from "axios";
import{useUserStore} from "../../store"
import {ElMessage} from "element-plus";
let number=0
const spring = axios.create({
  baseURL: 'http://localhost:9090/api'
})
const userStore = useUserStore()
const change=ref({
  applicationId:0,
  applicationStatus:10,
  employeeId:'',
  employeeName:'',
  formerDormitory:'',
  newDormitory:'',
  applicationTime:''
})

const loadid=async ()=>{
  await spring.get('/getid',{params:{username:userStore.account}})
      .then(response=>{
        change.value.employeeId=response.data
        number=change.value.employeeId;
        spring.get('/getNumber',{params:{id:change.value.employeeId}})
            .then(response=>{
              change.value.formerDormitory=response.data
            });
        spring.get('/getname',{params:{id:change.value.employeeId}})
            .then(response=>{
              change.value.employeeName=response.data;

            })
      })
}

const submit=async ()=>{
  await spring.post('/add',change.value)
      .then(response=>{
        ElMessage({
          message:"操纵成功",
          type:"success"
        })
      }).catch(error=>{
        ElMessage({
          message: error,
          type: 'warning'
        })
      })
  await apply()
}
onMounted( async ()=>{
  await loadid()
  console.log(number)
  await apply()
})
const apply=async ()=>{
  await spring.get('/getstatus',{params:{id:number}})
      .then(response=>{
        change.value.applicationStatus=response.data;
      })
}
</script>

<template>
  <el-form class="migrate-form"  label-width="100px">
    <el-form-item label="工号" label-width="100px">
      <el-input v-model="change.employeeId" disabled></el-input>
    </el-form-item>
    <el-form-item label="宿舍号" label-width="100px">
      <el-input v-model="change.formerDormitory" disabled></el-input>
    </el-form-item>
    <el-form-item label="姓名" label-width="100px">
      <el-input v-model="change.employeeName" disabled></el-input>
    </el-form-item>
    <el-form-item label="新宿舍号" label-width="100px">
      <el-input v-model="change.newDormitory"
                placeholder="请输入您要更换的宿舍号"
      ></el-input>
    </el-form-item>
    <el-form-item label="提交时间" label-width="100px">
      <el-date-picker v-model="change.applicationTime" format="YYYY/MM/DD" value-format="YYYY-MM-DD"/>
    </el-form-item>
    <div class="buttonBox" style="display: flex">
      <el-button v-if="!(change.applicationStatus===0||change.applicationStatus===1||change.applicationStatus===2)" @click="submit">提交申请</el-button>
      <div style="margin-left: 500px">
        <el-text v-if="change.applicationStatus===0" class="tip1" type="success">申请审核中...</el-text>
        <el-text v-if="change.applicationStatus===1" class="tip2" type="info">申请成功</el-text>
        <el-text v-if="change.applicationStatus===2" class="tip3" type="danger">申请驳回</el-text>
      </div>
    </div>
  </el-form>
</template>

<style scoped>
.tip1{
  color: coral;
}
.tip2{
  color: #4db04a;
}
.tip3{
  color: red;
}
</style>