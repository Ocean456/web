<script lang="ts" setup>

import {ref, watch} from "vue";

const props = defineProps<{
  employee: {
    employeeID: number
    employeeName: string
    employeeGender: string
    employeeAge: number
    employeePhone: string
    employeeAddress: string
    employeeDepartment: string
    employeePosition: string
    employeeSalary: number
    employeeHireDate: string
    employeeResignationDate: string
    employeeEmergencyContactPhone: string
    employeeDormitory: string
  },
  visible: boolean
}>()

const dialog = ref(props.visible);

watch(() => props.visible, (value) => {
  dialog.value = value;
});

const emit = defineEmits(["update:visible"]);

const handleClose = () => {
  emit("update:visible", false);
}


</script>

<template>
  <el-dialog title="详细信息" v-model="dialog" :close-on-click-modal="true" :before-close="handleClose" width="60%">
    <el-descriptions border :column="3">
      <el-descriptions-item label="员工编号">{{ props.employee.employeeID }}</el-descriptions-item>
      <el-descriptions-item label="姓名">{{ props.employee.employeeName }}</el-descriptions-item>
      <el-descriptions-item label="性别">{{ props.employee.employeeGender }}</el-descriptions-item>
      <el-descriptions-item label="年龄">{{ props.employee.employeeAge }}</el-descriptions-item>
      <el-descriptions-item label="电话">{{ props.employee.employeePhone }}</el-descriptions-item>
      <el-descriptions-item label="地址">{{ props.employee.employeeAddress }}</el-descriptions-item>
      <el-descriptions-item label="部门">{{ props.employee.employeeDepartment }}</el-descriptions-item>
      <el-descriptions-item label="职位">{{ props.employee.employeePosition }}</el-descriptions-item>
      <el-descriptions-item label="底薪">{{ props.employee.employeeSalary }}</el-descriptions-item>
      <el-descriptions-item label="入职日期">{{ props.employee.employeeHireDate }}</el-descriptions-item>
      <el-descriptions-item label="离职日期">{{ props.employee.employeeResignationDate }}</el-descriptions-item>
      <el-descriptions-item label="紧急联系电话">{{
          props.employee.employeeEmergencyContactPhone
        }}
      </el-descriptions-item>
      <el-descriptions-item label="宿舍号">{{ props.employee.employeeDormitory }}</el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>