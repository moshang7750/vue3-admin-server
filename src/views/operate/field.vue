<template>
  <div class="af-field">
    <Tabs :tabData="tabData" />
    <div class="af-common__btns">
      <el-button type="primary">新增</el-button>
      <el-button type="success">导出报表</el-button>
    </div>
    <div class="af-filter-warp">
      <div class="af-warp-left">
        <el-input v-model="params.toolName" placeholder="请输入栏位名" />
      </div>
      <div class="af-warp-right">
        <el-button type="primary" @click="searchData">查询</el-button>
      </div>
    </div>
    <div class="af-field__content">
      <div class="af-field__content__tree">
        <el-input placeholder="输入关键字进行过滤" v-model="filterName">
        </el-input>

        <el-tree
          class="filter-tree"
          :data="treeData"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="refTree"
        >
        </el-tree>
      </div>
      <div class="af-field__content__table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="工具包ID" sortable>
          </el-table-column>
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
    </div>
  </div>
</template>

<script lang="ts">
import Tabs from '@/components/common/tabs.vue'
import { defineComponent, reactive, Ref, ref, watch } from 'vue'
import { FieldFilter, FieldTable, StatusData } from '@/types/operate.type'
import { useMethons } from '../../libs/useMethons'
export default defineComponent({
  components: { Tabs },
  setup(props) {
    // tab
    const tabData = ref([{ name: '栏位', type: 1 }])
    // 筛选框
    const params: FieldFilter = reactive({
      id: '',
      fieldName: '',
      page: 1,
      size: 10,
    })
    // tree 数据
    const filterName = ref('')
    const treeData: Ref<FieldTable[]> = ref([
      {
        id: 1,
        fieldName: '一级 1',
        children: [
          {
            id: 4,
            fieldName: '二级 1-1',
            children: [
              {
                id: 9,
                fieldName: '三级 1-1-1',
              },
              {
                id: 10,
                fieldName: '三级 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        fieldName: '一级 2',
        children: [
          {
            id: 5,
            fieldName: '二级 2-1',
          },
          {
            id: 6,
            fieldName: '二级 2-2',
          },
        ],
      },
      {
        id: 3,
        fieldName: '一级 3',
        children: [
          {
            id: 7,
            fieldName: '二级 3-1',
          },
          {
            id: 8,
            fieldName: '二级 3-2',
          },
        ],
      },
    ])
    const defaultProps = {
      children: 'children',
      label: 'fieldName',
    }
    const filterNode = (value: string, data: FieldTable) => {
      if (!value) return true
      return data.fieldName.indexOf(value) !== -1
    }
    const refTree: any = ref(null)
    watch(filterName, (newd) => {
      refTree.value.filter(newd)
    })

    // 表格数据
    const tableData: Ref<FieldTable[]> = ref([
      {
        id: '111',
        fieldName: '一级栏位名',
        sort: 1,
        path: '/home',
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
      params,
      filterName,
      treeData,
      defaultProps,
      filterNode,
      refTree,
      tableData,
      totals,
      statusData,
      ...methods,
    }
  },
})
</script>

<style lang="scss" scoped>
@include b(field) {
  @include e(content) {
    display: flex;
    @include b(field__content__tree) {
      width: 300px;
      padding-right: 20px;
      border-right: 1px solid #eaeaea;
    }
    @include b(field__content__table) {
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>
