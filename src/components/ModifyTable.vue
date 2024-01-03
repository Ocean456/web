<script setup lang="ts">
import {ref} from 'vue';
import ModifyDialog from "./ModifyDialog.vue";

const props = defineProps<{
  tableData: {
    employeeID: number
    employeeName: string
    employeeGender: string
    employeeAge: number
    employeePhone: string
    employeeAddress: string
    employeeDepartment: string
    employeePosition: string
    employeeSalary: number
    employeeHireDate: string
    employeeResignationDate: string
    employeeEmergencyContactPhone: string
    employeeDormitory: string
  }[]
}>()

const selectedEmployee = ref({
  employeeID: 0,
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
});
const dialogVisible = ref(false);

const openDialog = (row: any) => {
  selectedEmployee.value = row;
  dialogVisible.value = true;
}
</script>

<template>
  <el-table :data="props.tableData" stripe>
    <el-table-column prop="employeeID" label="员工编号"></el-table-column>
    <el-table-column prop="employeeName" label="员工姓名"></el-table-column>
    <el-table-column prop="employeeGender" label="员工性别"></el-table-column>
    <el-table-column prop="employeeAge" label="员工年龄"></el-table-column>
    <el-table-column prop="employeeDepartment" label="所属部门"></el-table-column>
    <el-table-column prop="employeePosition" label="职位"></el-table-column>
    <el-table-column label="操作">
      <template #default="{row}">
        <el-button type="primary" size="small" @click="openDialog(row)">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
  <ModifyDialog :employee="selectedEmployee" :visible="dialogVisible" @update:visible="dialogVisible = $event"></ModifyDialog>

</template>

<style scoped>

</style>