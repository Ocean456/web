<script setup lang="ts">
import {deleteTraining} from "../axios";
import {ElMessage} from "element-plus";

const props = defineProps<{
  tableData: {
    trainingId: number
    trainingName: string
    trainingPersonal: string
    trainingStartDate: string
    trainingEndDate: string
  }[]
}>()

const deleteRow = (row: any) => {
  deleteTraining(row.trainingId).then(() => {
    ElMessage.success('删除成功')
  }).catch(() => {
    ElMessage.error('删除失败')
  })
  props.tableData.splice(props.tableData.indexOf(row), 1)

}
</script>

<template>
  <el-table :data="props.tableData" style="width: 100%" stripe>
<!--    <el-table-column prop="trainingId" label="培训编号"></el-table-column>-->
    <el-table-column prop="trainingName" label="培训名称"></el-table-column>
    <!--    <el-table-column prop="employeeId" label="培训对象"></el-table-column>-->
    <el-table-column prop="employeeName" label="培训对象"></el-table-column>
    <el-table-column prop="trainingStartDate" label="培训开始时间"></el-table-column>
    <el-table-column prop="trainingEndDate" label="培训结束时间"></el-table-column>
    <!--   delete  -->
    <el-table-column label="操作">
      <template #default="{row}">
        <el-button type="danger" size="small" @click="deleteRow(row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>