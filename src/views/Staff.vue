<script lang="ts" setup>
import {ref} from "vue";
import StaffInfo from "../components/staff/Info.vue";
import Setting from "../components/staff/Setting.vue";
import Check from "../components/staff/Check.vue";
import DormChange from "../components/staff/DormChange.vue";


// const loadConfig

const display = ref('staff')
</script>

<template>
  <div class="staff">
    <el-card class="card">
      <el-tabs v-model="display" class="tabs">
        <el-tab-pane label="个人信息" name="staff">
          <StaffInfo/>
        </el-tab-pane>
        <el-tab-pane label="宿舍更换" name="dorm" lazy>
          <DormChange/>
        </el-tab-pane>
        <el-tab-pane label="考勤签到" name="check" lazy>
          <Check/>
        </el-tab-pane>
        <el-tab-pane label="系统设置" name="setting" lazy>
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
  height: 70vh;
}


</style>
