<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {getEmployeeCount , addEmployee} from '../axios'
import {ElMessage} from "element-plus";


const addition = ref({
  employeeID: '',
  employeeName: '',
  employeeGender: '',
  employeeAge: '',
  employeePhone: '',
  employeeAddress: '',
  employeeDepartment: '',
  employeePosition: '',
  employeeSalary: '',
  employeeDormitory: ''
})


const getCount = () => {
  getEmployeeCount().then((res) => {
    addition.value.employeeID = res.data + 1
  })
}

const submit = () => {
  addEmployee(addition.value).then((res) => {
    if (res.status === 200) {
      getCount()
      reset()
      ElMessage.success('添加成功')
    } else {
      ElMessage.error('添加失败')
    }
  })
}
const reset = () => {
  addition.value.employeeName = ''
  addition.value.employeeGender = ''
  addition.value.employeeAge = ''
  addition.value.employeePhone = ''
  addition.value.employeeAddress = ''
  addition.value.employeeDepartment = ''
  addition.value.employeePosition = ''
  addition.value.employeeSalary = ''
  addition.value.employeeDormitory = ''
}
onMounted(() => {
  getCount()
})


</script>

<template>
  <div class="entry">
    <h3>个人信息</h3>
    <el-card class="card " shadow="hover">
      <el-form :model="addition" label-width="60px" label-position="left">
        <el-form-item label="姓名">
          <el-input v-model="addition.employeeName" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model.number="addition.employeePhone" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="addition.employeeGender" placeholder="请选择性别" style="width: 100%;">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model.number="addition.employeeAge" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="addition.employeeDepartment" placeholder="请输入部门"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="addition.employeePosition" placeholder="请输入职位"></el-input>
        </el-form-item>
      </el-form>
    </el-card>

    <h3>员工信息</h3>
    <el-card class="card " shadow="hover">
      <el-form :model="addition" label-width="80px">
        <el-form-item label="员工号">
          <el-input v-model="addition.employeeID" placeholder="请输入员工号" disabled></el-input>
        </el-form-item>
        <el-form-item label="宿舍号">
          <el-input v-model="addition.employeeDormitory" placeholder="请输入宿舍号"></el-input>
        </el-form-item>
        <el-form-item label="底薪">
          <el-input v-model.number="addition.employeeSalary" placeholder="请输入员工底薪"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
    <div>
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button type="primary" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
  width: 80%;
  border-radius: 10px;
  border: 1px solid #3498db;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h3 {
  color: #3498db;
  margin: 20px 0;
}



:deep(.el-form-item__label ) {
  color: #4db04a;
}

:deep(.el-form-item) {
  margin: 20px 0 20px 20px;
}

:deep(.el-input,.el-select) {
  width: 100%;
  background-color: #ecf0f1;
  border-color: #d72a06;
  color: #2c3e50;
}

.entry{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

</style>