<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import {
  BellFilled, Compass, Delete, Edit, Grid, Histogram, House, List, Management, Money, Search, Star
} from "@element-plus/icons-vue";

</script>

<template>
  <el-container>

    <el-container>
      <el-aside>
        <el-menu :default-active="$route.path" router>
          <el-card style="background-color: transparent;color: #ffffff;font-size: small" shadow="never">

            员工信息管理系统
          </el-card>
          <el-menu-item index="/admin/home">
            <el-icon>
              <Compass/>
            </el-icon>
            系统首页
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <Management/>
              </el-icon>
              员工管理
            </template>
            <el-menu-item index="/admin/info">
              <el-icon>
                <Grid/>
              </el-icon>
              员工信息
            </el-menu-item>
            <el-menu-item index="/admin/entry">
              <el-icon>
                <List/>
              </el-icon>
              员工入职
            </el-menu-item>
            <el-menu-item index="/admin/dimission">
              <el-icon>
                <Delete/>
              </el-icon>
              员工离职
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
          </el-sub-menu>

          <el-menu-item index="/admin/salary">
            <el-icon>
              <Money/>
            </el-icon>
            工资管理
          </el-menu-item>
          <el-menu-item index="/admin/analytics">
            <el-icon>
              <Histogram/>
            </el-icon>
            统计分析
          </el-menu-item>

          <el-menu-item index="/admin/attendance">
            <el-icon>
              <BellFilled/>
            </el-icon>
            考勤管理
          </el-menu-item>
          <el-menu-item index="/admin/train">
            <el-icon>
              <Star/>
            </el-icon>
            培训管理
          </el-menu-item>
          <el-menu-item index="/admin/dormitory">
            <el-icon>
              <House/>
            </el-icon>
            宿舍管理
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-menu :ellipsis="false" mode="horizontal" router>
            <el-card shadow="never" style="margin-left: 0px;color: #344358">{{ $route.name}}</el-card>
            <div class="flex-grow"></div>
            <el-menu-item style="color:#344358;" index="/login">退出登录</el-menu-item>
          </el-menu>
        </el-header>
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
  width: 180px;
  height: 100vh;
}

:deep(.el-aside) {
  background-color: #324257;

}

:deep(.el-menu) {
  background-color: transparent;
}

.el-main {
  background-color: white;
}

.el-menu-item {
  color: #c0cbd9;
}

.el-menu-item:hover {
  background-color: #2f3f52;
}

.el-card {
  border: none;
  text-align: center;
}

:deep(.el-sub-menu__title) {
  color: #c0cbd9;
}

* {
  user-select: none;
}
:deep(.el-sub-menu__title:hover){
  background-color: #2f3f52;
}
.el-main {
  padding: 0;
}

:deep(h1){
  margin: 0;
}

</style>