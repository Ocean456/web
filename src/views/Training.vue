<script setup lang="ts">
import TrainingTable from "../components/TrainingTable.vue";
import {onMounted, ref} from "vue";
import {getTrainings, addTraining, getTraining} from "../axios";
import {ElMessage} from "element-plus";

const tableData = ref([])

onMounted(() => {
  getTrainings().then((res: any) => {
    tableData.value = res.data
  })

})
const dialogVisible = ref(false)
const addition = ref({
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
      ElMessage.success('添加成功')
    })
  }).catch(() => {
    ElMessage.error('添加失败')
  })
}
const trainingName = ref('')

const search = () => {
  getTraining(trainingName.value).then((res: any) => {
    tableData.value = res.data
  })
}

</script>

<template>
  <div class="training">
    <el-input @keydown.enter="search" v-model="trainingName" placeholder="请输入培训名称">
      <template #append>
        <el-button @click="search">搜索</el-button>
      </template>
    </el-input>

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
          <el-date-picker
              style="width: 100%"
              v-model="addition.trainingStartDate"
              value-format="YYYY-MM-DD"
              type="Date"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="培训结束时间">
          <el-date-picker
              style="width: 100%"
              v-model="addition.trainingEndDate"
              value-format="YYYY-MM-DD"
              type="Date"
              placeholder="选择日期">
          </el-date-picker>
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