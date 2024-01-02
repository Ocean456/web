<script setup lang="ts">
const props = defineProps<{
  tableData: {
    trainingID: number
    trainingName: string
    trainingPersonal: string
    trainingStartDate: string
    trainingEndDate: string
  }[]
}>()
</script>

<template>
  <el-table :data="props.tableData" style="width: 100%" stripe>
    <el-table-column prop="trainingId" label="培训编号"></el-table-column>
    <el-table-column prop="trainingName" label="培训名称"></el-table-column>
    <el-table-column prop="employeeId" label="培训对象"></el-table-column>
    <el-table-column prop="trainingStartDate" label="培训开始时间"></el-table-column>
    <el-table-column prop="trainingEndDate" label="培训结束时间"></el-table-column>
  </el-table>
</template>

<style scoped>

</style>