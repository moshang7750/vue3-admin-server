<template>
  <div class="af-means">
    <Tabs :tabData="tabData" @tab-change="TabChange" />
    <div class="af-common__btns">
      <el-button type="primary">新增</el-button>
      <el-button type="success">导出报表</el-button>
    </div>
    <div class="af-filter-warp">
      <div class="af-warp-left">
        <el-input v-model="params.meansName" placeholder="请输入资料名" />
        <el-select v-model="params.meansType" placeholder="请选择资料类型">
          <el-option
            v-for="item in typeData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="params.openType" placeholder="请选择开放类型">
          <el-option
            v-for="item in typeData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="af-warp-right">
        <el-button type="primary" @click="searchData">查询</el-button>
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="资料ID" sortable> </el-table-column>
      <el-table-column prop="meansName" label="资料名" sortable>
      </el-table-column>
      <el-table-column prop="meansTypeName" label="资料类型" sortable>
      </el-table-column>
      <el-table-column prop="publisher" label="发布人" sortable>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="发布时间"
        sortable
      ></el-table-column>
      <el-table-column prop="status" label="状态" sortable>
        <template #default="scope">
          <span>{{ statusData[scope.row.status] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作"> </el-table-column>
    </el-table>
    <div class="af-pagination">
      <span>共{{ totals }}条</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.page"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="params.size"
        layout="sizes, prev, pager, next, jumper"
        :total="totals"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tabs from '@/components/common/tabs.vue'
import { defineComponent, reactive, Ref, ref, watch } from 'vue'
import { MeansFilter, MeansTable, StatusData } from '@/types/operate.type'
import { useMethons } from '../../libs/useMethons'
export default defineComponent({
  components: { Tabs },
  setup(props) {
    // tab
    const tabData = ref([{ name: '资料', type: 1 }])
    const TabChange = (value: number) => {
      console.log(value)
    }
    // 筛选框
    const params: MeansFilter = reactive({
      meansName: '',
      meansType: '',
      openType: '',
      page: 1,
      size: 10,
    })
    const typeData = ref([
      {
        value: '选项1',
        label: '黄金糕',
      },
      {
        value: '选项2',
        label: '双皮奶',
      },
      {
        value: '选项3',
        label: '蚵仔煎',
      },
    ])

    const tableData: Ref<MeansTable[]> = ref([
      {
        id: '111',
        meansName: '新闻',
        meansTypeName: '测试',
        publisher: '李四',
        createTime: '2021-02-21 12:33:12',
        status: 1,
      },
    ])
    const totals: Ref<number> = ref(0)
    const statusData = StatusData

    const methods = useMethons(props, params)
    // watch(params, (newd, old) => {
    //   console.log(newd, old)
    // })
    return {
      tabData,
      typeData,
      params,
      tableData,
      totals,
      statusData,
      TabChange,
      ...methods,
    }
  },
})
</script>
