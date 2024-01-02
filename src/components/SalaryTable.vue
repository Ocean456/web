<script setup lang="ts">
const props = defineProps<{
  tableData: {
    salaryId: number
    employeeId: number
    salaryDate: string
    salaryBasic: number
    salaryBonus: number
    salaryDeduction: number
    salaryTotal: number
  }[]
}>()
</script>

<template>
  <el-table :data="props.tableData" style="width: 100%" stripe>
    <el-table-column prop="salaryId" label="工资编号"></el-table-column>
    <el-table-column prop="employeeId" label="员工编号"></el-table-column>
    <el-table-column prop="salaryDate" label="工资日期"></el-table-column>
    <el-table-column prop="salaryBasic" label="基本工资"></el-table-column>
    <el-table-column prop="salaryBonus" label="奖金"></el-table-column>
    <el-table-column prop="salaryDeduction" label="扣款"></el-table-column>
    <el-table-column prop="salaryTotal" label="总工资"></el-table-column>
  </el-table>
</template>

<style scoped>

</style>