<script setup lang="ts">
import {computed, ref} from "vue";
import {getEmployee, setDimission} from "../axios";
import {ElMessage} from "element-plus";


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
  getEmployee('employeeID', parameter.value).then((res) => {
    dimission.value = res.data[0];
  })
}
const update = () => {
  setDimission(dimission.value).then(() => {
    ElMessage({
      message: "操作成功",
      type: "success"
    })
  }).catch(() => {
    ElMessage({
      message: '操作失败',
      type: 'warning'
    })

})

const inputWidth = computed(() => {
  if (parameter.value.length === 0) {
    return '100%';
  } else {
    return 'calc(100% - 143px)';
  }
});
</script>

<template>
  <div style="padding: 20px">
    <div>
      <el-form-item label=" 员工号:" label-width="100px">
        <el-input v-model="parameter" autofocus placeholder="请输入员工号" class="id"
                  :style="{width:inputWidth}"></el-input>
        <el-button style="margin-left: 10px" v-if="parameter.length>0" type="primary" size="default" @click="search">查询</el-button>
        <el-button v-if="parameter.length>0" type="primary" size="default" @click="update">确定</el-button>
      </el-form-item>
    </div>
    <div>
      <h1 style="text-align: center;margin-bottom: 10px" >离职信息确认</h1>
      <el-form v-model="dimission" label-width="100px" style="margin-right: 20px" label-position="right">
        <el-form-item label="员工号">
          <el-input v-model="dimission.employeeID" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="dimission.employeeName" disabled></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="dimission.employeePhone" disabled></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="dimission.employeeGender" disabled></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="dimission.employeeAge" disabled></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="dimission.employeeDepartment" disabled></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="dimission.employeePosition" disabled></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="dimission.employeeAddress" disabled></el-input>
        </el-form-item>
        <el-form-item label="紧急联系电话">
          <el-input v-model="dimission.employeeEmergencyContactPhone" disabled></el-input>
        </el-form-item>
        <el-form-item label="入职时间">
          <el-date-picker disabled style="width: 100%;" v-model="dimission.employeeHireDate"></el-date-picker>
        </el-form-item>
        <el-form-item label="离职时间">
          <el-date-picker v-model="dimission.employeeResignationDate" style="width: 100%;" format="YYYY/MM/DD"
                          value-format="YYYY-MM-DD"></el-date-picker>
        </el-form-item>
<!--        <el-form-item label="薪水">
          <el-input v-model="dimission.employeeSalary"></el-input>
        </el-form-item>-->
        <el-form-item label="宿舍号">
          <el-input disabled v-model="dimission.employeeDormitory"></el-input>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<style scoped>


</style>