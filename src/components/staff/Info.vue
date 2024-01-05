<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import{useUserStore} from "../../store"
import {ElMessage} from "element-plus";
const spring = axios.create({
  baseURL: 'http://localhost:9090/api'
})

const loadData=()=>{
  spring.get('/phone',{params:{username:userStore.account}})
      .then(response=>{
        data.value=response.data
      })
}
const submit=()=>{
  spring.put('/perfect',{id:data.value.employeeID,address:data.value.employeeAddress,time:data.value.employeeHireDate,phone:data.value.employeeEmergencyContactPhone})
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
}

const userStore = useUserStore()
const data = ref({
  employeeID: '',
  employeeName: '',
  employeeGender: '',
  employeeAge: 0,
  employeePhone: '',
  employeeAddress: '',
  employeeDepartment: '',
  employeePosition: '',
  employeeSalary: 0,
  employeeHireDate: '',
  employeeResignationDate: '',
  employeeEmergencyContactPhone: '',
  employeeDormitory: ''
})
onMounted(()=>{
  loadData()
})
</script>

<template>
  <div>
    <el-form label-width="110px">
      <el-form-item v-model="data" label="工号">
        <el-input v-model="data.employeeID" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="姓名">
        <el-input v-model="data.employeeName" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="性别">
        <el-input v-model="data.employeeGender" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="年龄">
        <el-input v-model="data.employeeAge" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="电话">
        <el-input v-model="data.employeePhone" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="地址">
        <el-input v-model="data.employeeAddress" ></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="部门">
        <el-input v-model="data.employeeDepartment" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="职位">
        <el-input v-model="data.employeePosition" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="薪水">
        <el-input v-model="data.employeeSalary" disabled></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="入职日期">
        <el-date-picker v-model="data.employeeHireDate" style="width: 100%;" format="YYYY/MM/DD" value-format="YYYY-MM-DD" ></el-date-picker>
      </el-form-item>
      <el-form-item v-model="data" label="紧急联系人电话">
        <el-input v-model="data.employeeEmergencyContactPhone" ></el-input>
      </el-form-item>
      <el-form-item v-model="data" label="宿舍">
        <el-input v-model="data.employeeDormitory" disabled></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"  @click="submit">提交</el-button>
  </div>
</template>

<style scoped>

</style>