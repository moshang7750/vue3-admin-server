<template>
  <div class="af-message">
    <Tabs :tabData="tabData" @tab-change="tabChange" />
    <Prcture v-if="tabIndex == 1" />
    <File v-else />
  </div>
</template>

<script lang="ts">
import Tabs from '@/components/common/tabs.vue'
import Prcture from './composeable/picture.vue'
import File from './composeable/file.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { Tabs, Prcture, File },
  setup() {
    const tabIndex = ref(1)
    const tabData = ref([
      { name: '图片', type: 1 },
      { name: '文档', type: 2 },
    ])
    const tabChange = (val: number) => {
      tabIndex.value = val
    }

    return {
      tabIndex,
      tabData,
      tabChange,
    }
  },
})
</script>
