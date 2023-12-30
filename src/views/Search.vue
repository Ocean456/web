<script setup lang="ts">
import {ref} from "vue";
import {getEmployee} from "../axios";
import EmployeeTable from "../components/EmployeeTable.vue";

const select = ref("employeeID");
const input = ref('');

const tableData = ref([]);
const search = () => {
  getEmployee(select.value, input.value).then((res:any) => {
    tableData.value = res.data;
  });
};
</script>

<template>
  <div id="search">
    <el-input v-model="input" placeholder="请输入内容" clearable>
      <template #prepend>
        <el-select v-model="select" placeholder="请选择">
          <el-option label="员工编号" value="employeeID"></el-option>
          <el-option label="员工姓名" value="employeeName"></el-option>
          <el-option label="员工性别" value="employeeGender"></el-option>
          <el-option label="员工年龄" value="employeeAge"></el-option>
          <el-option label="员工电话" value="employeePhone"></el-option>
          <el-option label="员工地址" value="employeeAddress"></el-option>
          <el-option label="员工部门" value="employeeDepartment"></el-option>
          <el-option label="员工职位" value="employeePosition"></el-option>
          <el-option label="员工薪水" value="employeeSalary"></el-option>
          <el-option label="员工入职日期" value="employeeHireDate"></el-option>
          <el-option label="员工离职日期" value="employeeResignationDate"></el-option>
          <el-option label="员工紧急联系电话" value="employeeEmergencyContactPhone"></el-option>
          <el-option label="员工宿舍" value="employeeDormitory"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button type="primary" @click="search">搜索</el-button>
      </template>
    </el-input>

    <EmployeeTable :table-data="tableData"></EmployeeTable>
  </div>
</template>

<style scoped>
#search {
  padding: 20px;
}
</style>