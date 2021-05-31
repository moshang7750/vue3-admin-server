<template>
  <div class="af-common__btns">
    <el-button type="primary">新增</el-button>
    <el-button type="success">导出报表</el-button>
  </div>
  <div class="af-filter-warp">
    <div class="af-warp-left">
      <el-select v-model="params.contentType" placeholder="请选择内容类型">
        <el-option
          v-for="item in typeData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="params.contentName" placeholder="请输入内容名" />
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
      label="审核时间"
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
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref, watch } from 'vue'
import { StatusData } from '@/types/operate.type'
import { ContentFilter, ContentTable } from '@/types/examine.types'
import { useMethons } from '@/libs/useMethons'
export default defineComponent({
  setup(props) {
    // 筛选框
    const params: ContentFilter = reactive({
      contentType: '',
      contentName: '',
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

    const tableData: Ref<ContentTable[]> = ref([
      {
        id: '111',
        contentTypeName: '新闻',
        contentName: '测试',
        examineTypeName: '免费下载',
        examiner: '李四',
        createTime: '2021-02-21 12:33:12',
        status: 1,
      },
    ])
    const totals: Ref<number> = ref(0)
    const statusData = StatusData

    const methods = useMethons(props, params)
    return {
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

<style></style>
