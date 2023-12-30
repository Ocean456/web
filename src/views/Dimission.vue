<script setup lang="ts">
import {ref} from "vue";
import {getEmployee} from "../axios";


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
  getEmployee('employeeID', parameter.value).then((res: any) => {
    dimission.value = res.data[0]
    console.log(dimission.value)
  })
}

</script>

<template>
  <div class="label">
    <el-form-item label=" 员工号:" style="font-size: large">
      <el-input v-model="parameter" placeholder="请输入员工号" class="id"></el-input>
      <el-button type="primary" size="default" @click="search">查询</el-button>
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
        <el-input v-model="dimission.employeeResignationDate"></el-input>
      </el-form-item>
      <el-form-item label="薪水">
        <el-input v-model="dimission.employeeSalary"></el-input>
      </el-form-item>
      <el-form-item label="宿舍号">
        <el-input v-model="dimission.employeeDormitory"></el-input>
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