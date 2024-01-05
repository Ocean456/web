<script setup lang="ts">
import {ref} from 'vue'
import {onMounted} from 'vue';
import {getApplications, updateApplication,deleteApplication} from "../axios";
import {ElMessage} from "element-plus";

type Application = {
  applicationId: number,
  employeeId: number,
  employeeName: string,
  formerDormitory: string,
  newDormitory: string,
  applicationTime: string,
  applicationStatus: number
}

const checkList = ref(['已确认', '已拒绝', '未处理']);

const totalData = ref<Application[]>([]);

const presentData = ref<Application[]>([]);


const loadData = () => {
  presentData.value = totalData.value.filter(data => checkList.value.includes(data.applicationStatus === 0 ? '未处理' : data.applicationStatus === 1 ? '已确认' : '已拒绝'));
}

const updateStatus = (row: any, status: number) => {
  // applicationId -> integer, applicationStatus -> integer
  updateApplication({applicationId: row.applicationId, applicationStatus: status}).then(() => {
    getApplications().then((res) => {
      totalData.value = res.data;
      ElMessage.success('修改成功')
      loadData();
    }).catch(() => {
      ElMessage.error('修改失败')
    })
  })
}

const deleteApplicationById = (row: any) => {
  deleteApplication(row.applicationId).then(() => {
    getApplications().then((res) => {
      totalData.value = res.data;
      ElMessage.success('删除成功')
      loadData();
    }).catch(() => {
      ElMessage.error('删除失败')
    })
  })
}

onMounted(() => {
  getApplications().then((res) => {
    totalData.value = res.data;
    loadData();
  })
})
</script>

<template>
  <div class="dormitory">
    <div class="checkbox">
      <el-checkbox-group v-model="checkList" @change="loadData">
        <el-checkbox label="已确认" name="type"></el-checkbox>
        <el-checkbox label="已拒绝" name="type"></el-checkbox>
        <el-checkbox label="未处理" name="type"></el-checkbox>
      </el-checkbox-group>
    </div>
    <el-table :data="presentData" stripe>
      <el-table-column label="员工号" prop="employeeId"></el-table-column>
      <el-table-column label="姓名" prop="employeeName"></el-table-column>
      <el-table-column label="原宿舍号" prop="formerDormitory"></el-table-column>
      <el-table-column label="新宿舍号" prop="newDormitory"></el-table-column>
      <el-table-column label="申请时间" prop="applicationTime"></el-table-column>
      <el-table-column align="center" label="处理状态" prop="applicationStatus">
        <template #default="scope">
          <el-text v-if="scope.row.applicationStatus===0" size="small" type="info">未处理</el-text>
          <el-text v-if="scope.row.applicationStatus===1" size="small" type="success">已确认</el-text>
          <el-text v-if="scope.row.applicationStatus===2" size="small" type="danger">已拒绝</el-text>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" prop="status" width="210">
        <template #default="scope">
          <el-button v-if="scope.row.applicationStatus===0" size="small" type="primary"
                     @click="updateStatus(scope.row, 1)">确认
          </el-button>
          <el-button v-if="scope.row.applicationStatus===0" size="small" type="danger"
                     @click="updateStatus(scope.row, 2)">拒绝
          </el-button>
          <el-button size="small" type="danger"
                     @click="deleteApplicationById(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.dormitory {
  padding: 20px;
}

.checkbox {
  float: right;
  margin-top: -10px;
  margin-right: 10px;
  margin-bottom: 5px;
}
</style>