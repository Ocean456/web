<template>
  <div>
    <div>
      <el-button @click="showAgeChart">年龄比例查看</el-button>
      <el-button @click="showDepartmentChart">部门比例查看</el-button>
      <el-button @click="showGenderChart">男女比例查看</el-button>
      <el-button @click="showHireDateChart">入职年限比例查看</el-button>
      <el-button @click="showAddressChart">地址分布比例查看</el-button>
    </div>
    <h2>{{ currentChartTitle }}</h2>
    <apexchart v-if="currentChartOptions" :options="currentChartOptions" :series="currentChartSeries"
               :type="currentChartType" width="700"></apexchart>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import {ElButton} from 'element-plus';

const api = axios.create({
  baseURL: 'http://localhost:9090/api/count',
});

export default {
  components: {
    ElButton,
  },
  data() {
    return {
      currentChartType: 'pie',
      currentChartTitle: '年龄比例查看',
      currentChartOptions: {},
      currentChartSeries: [],
      ageChartOptions: {
        chart: {
          id: 'age-chart-example',
        },
        labels: ['18-30', '31-40', '41-50', '51-60'],
        colors: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db'],
      },
      ageChartSeries: [],
      departmentChartOptions: {
        chart: {
          id: 'department-chart-example',
        },
        labels: [
          '产品质量部',
          '人力资源部',
          '会计及金融部',
          '信息技术支持部',
          '公关部',
          '外销部',
          '工程部',
          '市场部',
          '服务支持部',
        ],
        colors: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db','#254152','#f26378','#e27971','#f16792'],
      },
      departmentChartSeries: [],
      addressChartOptions: {
        chart: {
          id: 'address-chart-example',
        },
        labels: [
          '上海',
          '深圳',
          '成都',
          '中山',
          '东莞',
          '北京',
          '广州',
        ],
        colors: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db','#e17829','#f788db'],
      },
      addressChartSeries: [],
      genderChartOptions: {
        chart: {
          id: 'gender-chart-example',
        },
        labels: ['男', '女'],
        colors: ['#e74c3c', '#3498db'],
      },
      genderChartSeries: [],
      hireDateChartOptions: {
        chart: {
          id: 'hiredate-chart-example',
        },
        labels: ['0-5 years', '6-10 years', '11-15 years', '16-20 years', '21-24 years'],
        colors: ['#e74c3c', '#f39c12', '#f1c40f', '#2ecc71', '#3498db'],
      },
      hireDateChartSeries: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchDataCounts();
  },
  methods: {
    async fetchDataCounts() {
      try {
        console.log('Start fetching data...');
        const [genderResponse, ageResponse, departmentResponse, hiredateResponse, addressResponse] = await Promise.all([
          api.get('/Gender'),
          api.get('/Age'),
          api.get('/Department'),
          api.get('/HireDate'),
          api.get('/Address')
        ]);
        this.genderChartSeries = genderResponse.data.map(([name, value]) => parseInt(value));
        this.ageChartSeries = ageResponse.data.map(([name, value]) => parseInt(value));
        this.departmentChartSeries = departmentResponse.data.map(([name, value]) => parseInt(value));
        this.hireDateChartSeries = hiredateResponse.data.map(([name, value]) => parseInt(value));
        this.addressChartSeries = addressResponse.data.map(([name, value]) => parseInt(value));

        this.updateChart();
      } catch (error) {
        console.error('Error fetching data counts:', error);
      } finally {
        this.loading = false;
        console.log('Data fetching complete.');
      }
    },
    showAgeChart() {
      this.currentChartTitle = '年龄比例查看';
      this.currentChartOptions = this.ageChartOptions;
      this.currentChartSeries = this.ageChartSeries;
      this.updateChart();
    },
    showDepartmentChart() {
      this.currentChartTitle = '部门比例查看';
      this.currentChartOptions = this.departmentChartOptions;
      this.currentChartSeries = this.departmentChartSeries;
      this.updateChart();
    },
    showGenderChart() {
      this.currentChartTitle = '男女比例查看';
      this.currentChartOptions = this.genderChartOptions;
      this.currentChartSeries = this.genderChartSeries;
      this.updateChart();
    },
    showHireDateChart() {
      this.currentChartTitle = '入职年限比例查看';
      this.currentChartOptions = this.hireDateChartOptions;
      this.currentChartSeries = this.hireDateChartSeries;
      this.updateChart();
    },
    showAddressChart() {
      this.currentChartTitle = '地址分布比例查看';
      this.currentChartOptions = this.addressChartOptions;
      this.currentChartSeries = this.addressChartSeries;
      this.updateChart();
    },
    updateChart() {
      switch (this.currentChartTitle) {
        case '年龄比例查看':
          this.currentChartOptions = this.ageChartOptions;
          this.currentChartSeries = this.ageChartSeries;
          this.currentChartType = 'pie';
          break;
        case '部门比例查看':
          this.currentChartOptions = this.departmentChartOptions;
          this.currentChartSeries = this.departmentChartSeries;
          this.currentChartType = 'pie';
          break;
        case '男女比例查看':
          this.currentChartOptions = this.genderChartOptions;
          this.currentChartSeries = this.genderChartSeries;
          this.currentChartType = 'pie';
          break;
        case '入职年限比例查看':
          this.currentChartOptions = this.hireDateChartOptions;
          this.currentChartSeries = this.hireDateChartSeries;
          this.currentChartType = 'pie';
          break;
        case '地址分布比例':
          this.currentChartOptions = this.addressChartOptions;
          this.currentChartSeries = this.addressChartSeries;
          this.currentChartType = 'pie';
          break;
        default:
          break;
      }
    }

  },
};
</script>

<style scoped>
</style>
