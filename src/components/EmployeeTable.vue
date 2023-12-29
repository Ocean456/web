<script setup lang="ts">
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
</script>

<template>
  <el-table :data="props.tableData" style="width: 100%" stripe>
    <el-table-column prop="employeeID" label="员工编号" ></el-table-column>
    <el-table-column prop="employeeName" label="员工姓名"></el-table-column>
    <el-table-column prop="employeeGender" label="员工性别" ></el-table-column>
    <el-table-column prop="employeeAge" label="员工年龄" ></el-table-column>
    <el-table-column prop="employeeDepartment" label="所属部门"></el-table-column>
    <el-table-column prop="employeePosition" label="职位" ></el-table-column>
    <el-table-column prop="employeeAddress" label="居住地址"></el-table-column>
    <el-table-column prop="employeePhone" label="联系电话"></el-table-column>
    <el-table-column label="详细信息">
      <template #default="{row}">
        <el-button type="primary" @click="openDialog(row)">查看</el-button>
      </template>
      </el-table-column>
<!--    <el-table-column prop="salary" label="员工薪水"></el-table-column>-->
<!--    <el-table-column prop="hireDate" label="入职日期"></el-table-column>-->
<!--    <el-table-column prop="resignationDate" label="离职日期"></el-table-column>-->
<!--    <el-table-column prop="emergencyContactPhone" label="紧急联系电话"></el-table-column>-->
<!--    <el-table-column prop="dormitory" label="宿舍"></el-table-column>-->
  </el-table>
</template>

<style scoped>

</style>