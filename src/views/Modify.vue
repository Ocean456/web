<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getEmployee} from "../axios";
import ModifyTable from "../components/ModifyTable.vue";

const presentData = ref([]);
const totalData = ref([]);
const parameter = ref('')
const currentPage = ref(1);
const pageSize = ref(18);
const total = ref(0);

const search = () => {
  getEmployee('employeeID', parameter.value).then((res) => {
    totalData.value = res.data;
    total.value = res.data.length;
    fetchData();
  })
}

const fetchData = () => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  presentData.value = totalData.value.slice(start, end);
};

const handleCurrentChange = (val: number) => {
  currentPage.value = val;
  fetchData();
};

onMounted(() => {
  /*  getEmployees().then((res) => {
      totalData.value = res.data;
      presentData.value = totalData.value;
    })*/
})
</script>

<template>
  <div class="modify">
    <!--    <h1>Modify</h1>-->
    <el-input v-model="parameter" @keydown.enter="search" placeholder="请输入员工号" class="id" style="margin-bottom: 10px">
      <template #append>
        <el-button type="primary" @click="search">搜索</el-button>
      </template>
    </el-input>
    <ModifyTable :table-data="presentData"></ModifyTable>
    <el-pagination background small :current-page="currentPage" :page-size="pageSize" :total="total" class="p"
                   layout="prev,pager,next,jumper" @current-change="handleCurrentChange"></el-pagination>
  </div>
</template>

<style scoped>
.modify {
  padding: 20px;
}
.p {
  margin-top: 15px;
  justify-content: center;
}

</style>