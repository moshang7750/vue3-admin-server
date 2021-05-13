<template>
  <div class="af-examine">
    <Tabs :tabData="tabData" @tab-change="tabChange" />
    <ContentCompontent v-if="tabType == 1" />
    <MeansComponent v-else-if="tabType == 2" />
  </div>
</template>

<script lang="ts">
import Tabs from '@/components/common/tabs.vue'
import { defineComponent, ref } from 'vue'

import ContentCompontent from './content.vue'
import MeansComponent from './means.vue'
export default defineComponent({
  components: { Tabs, ContentCompontent, MeansComponent },
  setup() {
    // tab
    const tabData = ref([
      { name: '内容审核', type: 1 },
      { name: '资料审核', type: 2 },
      { name: '活动审核', type: 3 },
      { name: '申请审核', type: 4 },
    ])
    const tabType = ref(1)

    const tabChange = (val: number) => {
      tabType.value = val
    }

    // watch(params, (newd, old) => {
    //   console.log(newd, old)
    // })
    return {
      tabData,
      tabType,
      tabChange,
    }
  },
})
</script>
