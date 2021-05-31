<template>
  <div class="af-departure">
    <Tabs :tabData="tabData" />
    <div class="af-common__btns">
      <el-button type="primary">新增</el-button>
      <el-button type="success">导出报表</el-button>
    </div>
    <div class="af-filter-warp">
      <div class="af-warp-left">
        <el-input v-model="params.feedbacker" placeholder="请输入反馈人" />
        <el-input v-model="params.phone" placeholder="请输入邮箱" />
        <el-input v-model="params.email" placeholder="请输入手机号" />
      </div>
      <div class="af-warp-right">
        <el-button type="primary" @click="searchData">查询</el-button>
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="用户ID" sortable> </el-table-column>
      <el-table-column prop="feedbacker" label="反馈人" sortable>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" sortable> </el-table-column>
      <el-table-column prop="phone" label="手机号" sortable> </el-table-column>
      <el-table-column prop="content" label="留言" sortable> </el-table-column>
      <el-table-column
        prop="createTime"
        label="反馈时间"
        sortable
      ></el-table-column>
      <el-table-column prop="status" label="状态" sortable>
        <template #default="scope">
          <span>{{ departureStatus[scope.row.status] }}</span>
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
import {
  DepartureFilter,
  DepartureTable,
  DepartureStatus,
} from '@/types/jurisdiction.type'
import { useMethons } from '@/libs/useMethons'
export default defineComponent({
  components: { Tabs },
  setup(props) {
    const tabData = ref([{ name: '留言管理', type: 1 }])
    // 筛选框
    const params: DepartureFilter = reactive({
      feedbacker: '',
      email: '',
      phone: '',
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

    const tableData: Ref<DepartureTable[]> = ref([
      {
        feedbacker: '张三',
        email: 'sxxx@qq.com',
        phone: '1234477862',
        leavingMessage: 'xxx',
        feedbackerTime: '2021-05-11 18:42:21',
        status: 1,
      },
    ])
    const totals: Ref<number> = ref(0)
    const departureStatus = DepartureStatus

    const methods = useMethons(props, params)
    return {
      tabData,
      typeData,
      params,
      tableData,
      totals,
      departureStatus,
      ...methods,
    }
  },
})
</script>

<style></style>
