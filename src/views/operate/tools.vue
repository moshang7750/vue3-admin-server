<template>
  <div class="af-tools">
    <Tabs :tabData="tabData" />
    <div class="af-common__btns">
      <el-button type="primary">新增</el-button>
      <el-button type="success">导出报表</el-button>
    </div>
    <div class="af-filter-warp">
      <div class="af-warp-left">
        <el-input v-model="params.toolName" placeholder="请输入工具包名" />
        <el-select v-model="params.toolType" placeholder="请选择工具类型">
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
      <el-table-column prop="id" label="工具包ID" sortable> </el-table-column>
      <el-table-column prop="toolName" label="工具包名" sortable>
      </el-table-column>
      <el-table-column prop="toolTypeName" label="工具类型" sortable>
      </el-table-column>
      <el-table-column prop="openTypeName" label="开放类型" sortable>
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
import { ToolFilter, ToolTable, StatusData } from '@/types/operate.type'
import { useMethons } from '../../libs/useMethons'
export default defineComponent({
  components: { Tabs },
  setup(props) {
    // tab
    const tabData = ref([{ name: '活动', type: 1 }])
    // 筛选框
    const params: ToolFilter = reactive({
      toolName: '',
      toolType: '',
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

    const tableData: Ref<ToolTable[]> = ref([
      {
        id: '111',
        toolName: '新闻',
        toolTypeName: '测试',
        openTypeName: '免费下载',
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
      ...methods,
    }
  },
})
</script>
