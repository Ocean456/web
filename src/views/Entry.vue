<script lang="ts" setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
const spring = axios.create({
  baseURL: 'http://localhost:9090/api'
})


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

const User=ref({
  username:'',
  password:'000000',
  role:'USER'
})

const getting=()=>{
  spring.get('/getcount').then(response=>{
    addition.value.employeeID=response.data+1
  })
}

const submit = () => {
  spring.post('/employee',addition.value)
      .then((response) =>{
        ElMessage({
          message:'操作成功',
          type:"success"
        })
      }).catch(error=> {
    ElMessage({
      message: error,
      type: 'warning'
    })
  })
  User.value.username=addition.value.employeePhone;
  spring.post('/insert',User.value)
      .then(response=>{
        ElMessage({
          message:'操作成功',
          type:"success"
        })
      }).catch(error=>{
    ElMessage({
      message: error,
      type: 'warning'
    })
  })
}
const reset=()=>{
  location.reload()
}
onMounted(()=>{
  getting()
})


</script>

<template>
  <div style="margin-left: 8%">
    <h3>个人信息</h3>
    <el-card class="card identity" shadow="hover">
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
    <el-card class="card identity" shadow="hover">
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
    <el-button type="primary"  @click="submit">提交</el-button>
    <el-button type="primary"  @click="reset">重置</el-button>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
  width: 90%;
  border-radius: 10px;
}

h3 {
  color: #3498db;
  margin: 20px 0;
}

.identity {
  border: 1px solid #3498db;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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

</style>