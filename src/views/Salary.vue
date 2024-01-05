<script setup lang="ts">
import {onMounted, ref} from 'vue'
import axios from "axios";
import {get_salary,get_salary1,get_salary2} from "../axios"
const spring = axios.create({
  baseURL: 'http://localhost:9090/api'
})
const input=ref(null)

const tableData=ref([{
  salaryId: '',
  employeeId: '',
  salaryDate: '',
  salaryBasic: '',
  salaryBonus: '',
  salaryDeduction: '',
  salaryTotal: ''
}])

const presentData=ref([{
  salaryId: '',
  employeeId: '',
  salaryDate: '',
  salaryBasic: '',
  salaryBonus: '',
  salaryDeduction: '',
  salaryTotal: ''
}])

const month=ref(null)
const search = async () => {
  try {
    let res;
    if(input.value == null && month.value != null){
      res = await get_salary2(month.value);
    } else if(month.value == null && input.value != null){
      res = await get_salary1(input.value);
    } else if(month.value != null && input.value != null){
      res = await get_salary(input.value, month.value);
    } else {
      res = await spring.get('/getsalary');
    }
    tableData.value = res.data;
    total.value = tableData.value.length;
    handleCurrentChange(currentPage.value);
  } catch (error) {
    console.error(error);
  }
}

const currentPage=ref(1)
const pageSize=ref(15)
const total=ref(0)
const handleCurrentChange=(val)=>{
  currentPage.value=val
  presentData.value=tableData.value.slice((currentPage.value-1)*pageSize.value,currentPage.value*pageSize.value)
}

onMounted(()=>{
  search()
})
</script>

<template>
  <div>
    <el-input @clear="input=null" class="input" v-model="input" placeholder="请输入工号" clearable>
      <template #prepend>
        <el-date-picker
            v-model="month"
            type="month"
            placeholder="选择月"
            style="float: right"
            value-format="YYYY-MM"
        ></el-date-picker>
      </template>
      <template #append>
        <el-button type="primary" @click="search">搜索</el-button>
      </template>
    </el-input>
    <el-table :data="presentData" style="width: 100%" stripe>
      <el-table-column prop="salaryId" label="工资编号"></el-table-column>
      <el-table-column prop="employeeId" label="员工编号"></el-table-column>
      <el-table-column prop="employeeName" label="员工姓名"></el-table-column>
      <el-table-column prop="month" label="工资日期"></el-table-column>
      <el-table-column prop="basicSalary" label="基本工资"></el-table-column>
      <el-table-column prop="allowance" label="奖金"></el-table-column>
      <el-table-column prop="deduction" label="扣款"></el-table-column>
      <el-table-column prop="totalSalary" label="总工资"></el-table-column>
    </el-table>
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        background
        class="p"
        :total="total">
    </el-pagination>
  </div>
</template>

<style scoped>
.p{
  text-align: center;
  justify-content: center;
  margin-top: 10px;
}
</style>