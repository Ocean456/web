<script lang="ts" setup>
import {ref} from "vue";
import StaffInfo from "../components/staff/Info.vue";
import Setting from "../components/staff/Setting.vue";

const display = ref('staff')
</script>

<template>
  <div class="staff">
    <el-card class="card">
      <el-tabs v-model="display" class="tabs">
        <el-tab-pane label="个人信息" name="staff">
          <StaffInfo/>
        </el-tab-pane>
        <el-tab-pane label="信息完善" name="perfect"></el-tab-pane>
        <el-tab-pane label="宿舍更换" name="dorm"></el-tab-pane>
        <el-tab-pane label="考勤签到" name="check"></el-tab-pane>
<!--        <el-tab-pane label="请假申请" name="leave"></el-tab-pane>-->
        <el-tab-pane label="系统设置" name="setting">
          <Setting/>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<style scoped>
.staff {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 70vw;
  height: 60vh;
}

</style>
