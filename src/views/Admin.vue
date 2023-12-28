<script setup lang="ts">
import {ref, onMounted, onUnmounted} from "vue";
import {Avatar, Edit, Grid, Histogram, House, InfoFilled, Money, Remove, Search} from "@element-plus/icons-vue";

const menu = ref({height: ''});

const updateHeight = () => {
  menu.value.height = window.innerHeight - 80 + "px";
};

onMounted(() => {
  document.body.style.backgroundImage = "none";
  updateHeight();
  window.addEventListener('resize', updateHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
});
</script>

<template>
  <el-container>
    <el-header>
      <el-menu :ellipsis="false" mode="horizontal">
        <el-menu-item>
          <el-icon>
            <Avatar/>
          </el-icon>
          员工信息管理系统
        </el-menu-item>
        <div class="flex-grow"></div>
        <el-menu-item index="/login">退出登录</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu :style="menu" :default-active="$route.path" router>
          <el-menu-item index="/admin/info">
            <el-icon>
              <Grid/>
            </el-icon>
            员工信息
          </el-menu-item>
          <el-menu-item index="/admin/position">
            <el-icon>
              <Remove/>
            </el-icon>
            入职离职
          </el-menu-item>
          <el-menu-item index="/admin/salary">
            <el-icon>
              <Money/>
            </el-icon>
            薪资管理
          </el-menu-item>
          <el-menu-item index="/admin/analytics">
            <el-icon>
              <Histogram/>
            </el-icon>
            统计分析
          </el-menu-item>
          <el-menu-item index="/admin/search">
            <el-icon>
              <Search/>
            </el-icon>
            信息查询
          </el-menu-item>
          <el-menu-item index="/admin/modify">
            <el-icon>
              <Edit/>
            </el-icon>
            信息修改
          </el-menu-item>
          <el-menu-item index="/admin/dormitory">
            <el-icon>
              <House/>
            </el-icon>
            宿舍调整
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.el-header {
  padding: 0;
}

.el-aside {
  width: 140px;
}
</style>