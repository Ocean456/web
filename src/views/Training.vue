<script setup lang="ts">
import TrainingTable from "../components/TrainingTable.vue";
import {onMounted, ref} from "vue";
import {getTrainings,addTraining} from "../axios";

const tableData = ref([])

onMounted(() => {
  getTrainings().then((res: any) => {
    tableData.value = res.data
  })

})
const dialogVisible = ref(false)
const addition = ref({
  trainingID: 0,
  trainingName: '',
  employeeID: '',
  trainingStartDate: '',
  trainingEndDate: ''

})

const add = () => {
  dialogVisible.value = true
}

const submit = () => {
  dialogVisible.value = false
  addTraining(addition.value).then(() => {
    getTrainings().then((res: any) => {
      tableData.value = res.data
    })
  }).catch(() => {
    console.log('添加失败')
  } )
}
</script>

<template>
  <div class="training">
    <el-button @click="add" class="button">添加培训</el-button>
    <TrainingTable :tableData="tableData"/>
    <el-dialog title="添加培训" v-model="dialogVisible">
      <el-form label-width="150">
        <el-form-item label="培训名称">
          <el-input v-model="addition.trainingName"></el-input>
        </el-form-item>
        <el-form-item label="培训对象员工号">
          <el-input v-model="addition.employeeID"></el-input>
        </el-form-item>
        <el-form-item label="培训开始时间">
          <el-input v-model="addition.trainingStartDate"></el-input>
        </el-form-item>
        <el-form-item label="培训结束时间">
          <el-input v-model="addition.trainingEndDate"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style scoped>
.training {
  padding: 20px;
}

.button {
  float: right;
}
</style>