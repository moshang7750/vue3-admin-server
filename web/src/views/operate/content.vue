<template>
  <div class="af-contents">
    <Tabs :tabData="tabData" @tab-change="TabChange" />
    <div class="af-common__btns">
      <el-button type="primary" @click="addContent">新增</el-button>
      <el-button type="success">导出报表</el-button>
    </div>
    <div class="af-filter-warp">
      <div class="af-warp-left">
        <el-select v-model="params.type" placeholder="请选择">
          <el-option
            v-for="item in typeData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input v-model="params.title" placeholder="请输入标题" />
        <el-input v-model="params.publisher" placeholder="请输入发布人" />
      </div>
      <div class="af-warp-right">
        <el-button type="primary" @click="searchData">查询</el-button>
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" sortable> </el-table-column>
      <el-table-column prop="typeName" label="类型" sortable> </el-table-column>
      <el-table-column prop="title" label="标题" sortable> </el-table-column>
      <el-table-column prop="publisher" label="发布人" sortable>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="注册时间"
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
import { defineComponent, reactive, Ref, ref } from 'vue'
import { OperateFilter, OperateTable, StatusData } from '@/types/operate.type'
import { useMethons } from '../../libs/useMethons'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: { Tabs },
  setup(props) {
    // tab
    const tabData = ref([
      { name: '新闻', type: 1 },
      { name: '研究领域', type: 2 },
      { name: '服务', type: 3 },
    ])
    let type = ref(1)
    const TabChange = (value: number) => {
      type.value = value
    }
    // 筛选框
    const params: OperateFilter = reactive({
      type: '',
      title: '',
      publisher: '',
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

    const tableData: Ref<OperateTable[]> = ref([
      {
        id: '111',
        typeName: '新闻',
        title: '测试',
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

    const router = useRouter()
    const addContent = () => {
      router.push({
        path: 'content/add',
        query: {
          type: type.value,
        },
      })
    }
    return {
      tabData,
      typeData,
      params,
      tableData,
      totals,
      statusData,
      TabChange,
      ...methods,
      addContent,
    }
  },
})
</script>

<style></style>
