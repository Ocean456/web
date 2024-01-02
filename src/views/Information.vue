<script setup lang="ts">
import {onMounted, ref} from "vue";
import EmployeeTable from "../components/EmployeeTable.vue";
import {getEmployeeByPage} from "../axios";

const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(15)
const total = ref(0)

onMounted(async () => {
  // const res = await getEmployees()

  const res = await getEmployeeByPage(currentPage.value, pageSize.value)
  tableData.value = res.data['records']
  total.value = res.data.total
  
})

const fetchData = async () => {
  const res = await getEmployeeByPage(currentPage.value, pageSize.value)
  tableData.value = res.data.records
  total.value = res.data.total
}
const handleCurrentChange = async (val: number) => {
  currentPage.value = val
  await fetchData()
}
</script>

<template>
  <div id="information">
    <EmployeeTable :tableData="tableData"/>
    <el-pagination background :current-page="currentPage" :page-size="pageSize" :total="total" class="p" layout="prev,pager,next,jumper" @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<style scoped>
#information {
  padding: 20px;
}
.p{
  margin-top: 20px;
  justify-content: center;
}
</style>