<template>
  <div class="af-role">
    <Tabs :tabData="tabData" />
    <div class="af-common__btns">
      <el-button type="primary">新增</el-button>
      <el-button type="success">导出报表</el-button>
    </div>
    <div class="af-filter-warp">
      <div class="af-warp-left">
        <el-input v-model="params.roleName" placeholder="请输入角色名" />
        <el-input v-model="params.creater" placeholder="请输入创建人" />
      </div>
      <div class="af-warp-right">
        <el-button type="primary" @click="searchData">查询</el-button>
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="角色ID" sortable> </el-table-column>
      <el-table-column prop="roleName" label="角色名" sortable>
      </el-table-column>
      <el-table-column prop="creater" label="创建人" sortable>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        sortable
      ></el-table-column>
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
import { UserGroupFilter, UserGroupTable } from '@/types/jurisdiction.type'
import { useMethons } from '@/libs/useMethons'
export default defineComponent({
  components: { Tabs },
  setup(props) {
    const tabData = ref([{ name: '角色管理', type: 1 }])
    // 筛选框
    const params: UserGroupFilter = reactive({
      userGroupName: '',
      creater: '',
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

    const tableData: Ref<UserGroupTable[]> = ref([
      {
        id: '111',
        userGroupName: '张三',
        memberNums: 10,
        creater: '张三',
        createTime: '2021-05-11 18:42:21',
      },
    ])
    const totals: Ref<number> = ref(0)

    const methods = useMethons(props, params)
    return {
      tabData,
      typeData,
      params,
      tableData,
      totals,
      ...methods,
    }
  },
})
</script>

<style></style>
