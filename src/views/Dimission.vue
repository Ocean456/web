<script setup lang="ts">
import {ref} from "vue";
import {getEmployee, setDimission} from "../axios";
import axios from "axios";
import {ElMessage} from "element-plus";
const spring = axios.create({
  baseURL: 'http://localhost:9090/api'
})

const parameter = ref('')
const dimission = ref({
  employeeID: '',
  employeeName: '',
  employeeGender: '',
  employeeAge: '',
  employeePhone: '',
  employeeAddress: '',
  employeeDepartment: '',
  employeePosition: '',
  employeeSalary: '',
  employeeDormitory: '',
  employeeHireDate: '',
  employeeEmergencyContactPhone: '',
  employeeResignationDate: '',

})

const search = () => {
  spring.get('/getemployee',{params:{id:parameter.value}}).then(response=>{
    dimission.value=response.data
  })
}
const update=()=>{
  update_date(dimission.value.employeeID,dimission.value.employeeResignationDate);
  spring.delete('/delet',{params:{username:dimission.value.employeePhone}})
      .then(response=>{
        ElMessage({
          message:"操纵成功",
          type:"success"
        })
      }).catch(error=>{
    ElMessage({
      message: error,
      type: 'warning'
    })
  })
}
</script>

<template>
  <div class="label">
    <el-form-item label=" 员工号:" style="font-size: large">
      <el-input v-model="parameter" placeholder="请输入员工号" class="id"></el-input>
      <el-button v-if="parameter.length>0" type="primary" size="default" @click="search">查询</el-button>
      <el-button v-if="parameter.length>0" type="primary" size="default" @click="update">确定</el-button>
    </el-form-item>
  </div>
  <div>
    <el-form v-model="dimission" label-width="100px" label-position="right">
      <el-form-item label="员工号">
        <el-input v-model="dimission.employeeID"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="dimission.employeeName"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="dimission.employeePhone"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="dimission.employeeGender"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="dimission.employeeAge"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="dimission.employeeDepartment"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="dimission.employeePosition"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="dimission.employeeAddress"></el-input>
      </el-form-item>
      <el-form-item label="紧急联系电话">
        <el-input v-model="dimission.employeeEmergencyContactPhone"></el-input>
      </el-form-item>
      <el-form-item label="入职时间">
        <el-input v-model="dimission.employeeHireDate"></el-input>
      </el-form-item>
      <el-form-item label="离职时间">
        <el-date-picker v-model="dimission.employeeResignationDate" style="width: 100%;" format="YYYY/MM/DD" value-format="YYYY-MM-DD" ></el-date-picker>
      </el-form-item>
      <el-form-item label="薪水">
        <el-input v-model="dimission.employeeSalary"></el-input>
      </el-form-item>
      <el-form-item label="宿舍号">
        <el-input  v-model="dimission.employeeDormitory"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<style scoped>
.label {
  margin-left: 30px;
  height: 40px;
}

.id {
  width: 1000px;
  height: 30px;
}


</style>