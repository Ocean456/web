<script setup lang="ts">
import TrainingTable from "../components/TrainingTable.vue";
import {onMounted, ref} from "vue";
import {getTrainings} from "../axios";

const tableData = ref([])

onMounted(() => {
  getTrainings().then((res: any) => {
    tableData.value = res.data
  })

})

</script>

<template>
  <div class="training">
    <TrainingTable :tableData="tableData"/>
  </div>
</template>

<style scoped>
.training{
  padding: 20px;
}
</style>