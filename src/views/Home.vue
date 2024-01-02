<script setup lang="ts">

</script>

<template>
  <div id="home">
    <el-card>
      <el-row>
        <el-col :span="6">
          <el-statistic :value="10000">
            <template #title>
              <div>
                用户总数
              </div>

            </template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
        </el-col>
        <el-col :span="6">
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
#home {
  height: 100%;
  padding: 0;
  margin: 0;
}

</style>