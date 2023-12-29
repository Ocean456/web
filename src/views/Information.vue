<script setup lang="ts">
import {getEmployees} from "../axios";
import {onMounted, ref} from "vue";
import EmployeeTable from "../components/EmployeeTable.vue";


const tableData = ref([])

onMounted(async () => {
  const res = await getEmployees()
  tableData.value = res.data
})
</script>

<template>
  <div>
    <EmployeeTable :tableData="tableData"/>

  </div>
</template>

<style scoped>

</style>