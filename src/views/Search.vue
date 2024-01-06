<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getEmployee, getEmployees} from "../axios";
import EmployeeTable from "../components/EmployeeTable.vue";

const select = ref("employeeName");
const input = ref('');

const totalData = ref([]);
const tableData = ref([]);
const search = () => {
  getEmployee(select.value, input.value).then((res: any) => {
    totalData.value = res.data;
    total.value = res.data.length;
    fetchData();
  });
};

const currentPage = ref(1);
const pageSize = ref(18);
const total = ref(0);

const fetchData = () => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  tableData.value = totalData.value.slice(start, end);
};

const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  fetchData();
};

onMounted(() => {
  getEmployees().then((res: any) => {
    totalData.value = res.data;
    tableData.value = totalData.value;
    handleCurrentChange(1);
    total.value = res.data.length;
  });
});
</script>

<template>
  <div id="search">
    <el-input class="input" v-model="input" placeholder="请输入内容" @keydown.enter="search" clearable>
      <template #prepend>
        <el-select v-model="select" placeholder="请选择">
          <el-option label="员工编号" value="employeeID"></el-option>
          <el-option label="员工姓名" value="employeeName"></el-option>
          <el-option label="员工性别" value="employeeGender"></el-option>
          <el-option label="员工年龄" value="employeeAge"></el-option>
          <el-option label="员工电话" value="employeePhone"></el-option>
          <el-option label="员工地址" value="employeeAddress"></el-option>
          <el-option label="员工部门" value="employeeDepartment"></el-option>
          <el-option label="员工职位" value="employeePosition"></el-option>
          <el-option label="员工薪水" value="employeeSalary"></el-option>
          <el-option label="员工入职日期" value="employeeHireDate"></el-option>
          <el-option label="员工离职日期" value="employeeResignationDate"></el-option>
          <el-option label="员工紧急联系电话" value="employeeEmergencyContactPhone"></el-option>
          <el-option label="员工宿舍" value="employeeDormitory"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button type="primary" @click="search">搜索</el-button>
      </template>
    </el-input>

    <EmployeeTable :table-data="tableData"></EmployeeTable>
    <el-pagination background small :current-page="currentPage" :page-size="pageSize" :total="total" class="p"
                   layout="prev,pager,next,jumper" @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<style scoped>
#search {
  padding: 20px;
}

.input {
  margin-bottom: 5px;
}

.p {
  margin-top: 15px;
  justify-content: center;
}
</style>