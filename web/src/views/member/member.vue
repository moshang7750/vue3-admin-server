<template>
  <div class="af-member">
    <Tabs :tabData="tabData" @tab-change="TabChange" />
    <div class="af-common__btns">
      <el-button type="primary" @click="addMember">新增</el-button>
      <el-button type="success">导出报表</el-button>
    </div>
    <div class="af-filter-warp">
      <div class="af-warp-left">
        <el-input placeholder="请输入账号名" />
        <el-input placeholder="请输入邮箱" />
        <el-input placeholder="请输入手机号" />
      </div>
      <div class="af-warp-right">
        <el-button type="primary">查询</el-button>
      </div>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="会员名" sortable> </el-table-column>
      <el-table-column prop="email" label="邮箱" sortable> </el-table-column>
      <el-table-column prop="phone" label="手机号" sortable> </el-table-column>
      <el-table-column prop="company" label="公司" sortable> </el-table-column>
      <el-table-column prop="position" label="职位" sortable> </el-table-column>
      <el-table-column prop="createTime" label="注册时间" sortable>
      </el-table-column>
      <el-table-column prop="status" label="状态" sortable> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Tabs from '@/components/common/tabs.vue'
import { TableDataItemMember } from '@/types/common.types'
import { useRouter } from 'vue-router'
import { defineComponent, onMounted, Ref, ref } from 'vue'
import { getMemberList } from '@/api/index'
export default defineComponent({
  components: { Tabs },

  setup() {
    const tabData = ref([
      { name: '普通会员', type: 1 },
      { name: '付费会员', type: 2 },
    ])
    const TabChange = (value: number) => {
      console.log(value)
    }

    const tableData: Ref<TableDataItemMember[]> = ref([
      {
        name: '王小虎',
        email: '1347749@qq.com',
        phone: '13578665563',
        company: '华锐',
        position: 'AMI',
        createTime: '2021-03-05 16:33:22',
        status: 1,
      },
    ])
    const router = useRouter()
    const addMember = () => {
      router.push(`/member/add`)
    }

    onMounted(async () => {
      let data = await getMemberList({ page: 1, size: 10 })
      console.log(data, 'data')
    })
    return {
      tabData,
      TabChange,
      tableData,
      addMember,
    }
  },
})
</script>
//
<style lang="scss" scoped>
// @include b(member) {
// }
//
</style>
