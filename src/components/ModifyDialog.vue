<script setup lang="ts">
import {ref, watch} from 'vue';
import {updateEmployee} from "../axios";
import {ElMessage} from "element-plus";

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

const handleSave = () => {
  updateEmployee(props.employee).then((response) => {
    if (response.status === 200) {
      emit("update:visible", false);
    } else {
      ElMessage.error("修改失败");
    }
  })
}
</script>

<template>
  <el-dialog title="修改信息" v-model="dialog" :close-on-click-modal="true" :before-close="handleClose" width="60%">
    <el-form :model="props.employee" label-width="100px">
      <el-form-item label="员工编号">
        <el-input v-model="props.employee.employeeID" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="props.employee.employeeName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="props.employee.employeeGender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="props.employee.employeeAge"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="props.employee.employeePhone"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="props.employee.employeeAddress"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="props.employee.employeeDepartment"></el-input>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="props.employee.employeePosition"></el-input>
      </el-form-item><!--
      <el-form-item label="底薪">
        <el-input v-model="props.employee.employeeSalary"></el-input>
      </el-form-item>-->
      <!--      <el-form-item label="入职日期">
              <el-input v-model="props.employee.employeeHireDate"></el-input>
            </el-form-item>-->
      <!--      <el-form-item label="离职日期">
              <el-input v-model="props.employee.employeeResignationDate"></el-input>
            </el-form-item>-->
      <el-form-item label="紧急联系电话">
        <el-input v-model="props.employee.employeeEmergencyContactPhone"></el-input>
      </el-form-item>
      <!--      <el-form-item label="宿舍号">
              <el-input v-model="props.employee.employeeDormitory"></el-input>
            </el-form-item>-->
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleSave">确 定</el-button>
    </span>
  </el-dialog>
</template>

<style scoped>

</style>