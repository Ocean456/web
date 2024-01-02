<script setup lang="ts">
import {ref} from "vue";


const data = ref({
  employeeID: 0,
  employeeName: '',
  employeeSex: '',
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
</script>

<template>
  <el-form label-width="100px">
    <el-form-item v-model="data" label="工号">
      <el-input v-model="data.employeeID" disabled></el-input>
    </el-form-item>
    <el-form-item v-model="data" label="姓名">
      <el-input v-model="data.employeeName" disabled></el-input>
    </el-form-item>
    <el-form-item v-model="data" label="性别">
      <el-input v-model="data.employeeSex" disabled></el-input>
    </el-form-item>
    <el-form-item v-model="data" label="年龄">
      <el-input v-model="data.employeeAge" disabled></el-input>
    </el-form-item>
    <el-form-item v-model="data" label="电话">
      <el-input v-model="data.employeePhone" disabled></el-input>
    </el-form-item>
    <el-form-item v-model="data" label="地址">
      <el-input v-model="data.employeeAddress" disabled></el-input>
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
      <el-input v-model="data.employeeHireDate" disabled></el-input>
    </el-form-item>
    <el-form-item v-model="data" label="紧急联系人电话">
      <el-input v-model="data.employeeEmergencyContactPhone" disabled></el-input>
    </el-form-item>
    <el-form-item v-model="data" label="宿舍">
      <el-input v-model="data.employeeDormitory" disabled></el-input>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>