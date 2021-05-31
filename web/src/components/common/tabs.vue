<template>
  <div class="af-tabs">
    <div
      class="af-tabs-item pointer"
      :class="{
        'is-active': tabIndex == item.type,
      }"
      v-for="item in tabData"
      :key="item.type"
      @click="tabClick(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { TabItem } from '@/types/common.types'
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'Tabs',
  props: {
    tabData: {
      type: Array as PropType<TabItem[]>,
    },
  },
  emits: {
    'tab-change': (value: number) => true,
  },
  setup(props, { emit }) {
    const tabIndex = ref(1)
    const tabClick = (item: TabItem) => {
      tabIndex.value = item.type
      emit('tab-change', item.type)
    }
    return {
      tabIndex,
      tabClick,
    }
  },
})
</script>

<style lang="scss" scoped>
@include b(tabs) {
  display: flex;
  border-bottom: 1px solid $border-color-gray;
  @include b(tabs-item) {
    width: 120px;
    height: 40px;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    border: 1px solid $border-color-gray;
    border-bottom: none;
    border-right: none;
    &:last-child {
      border-right: 1px solid $border-color-gray;
    }
    @include when(active) {
      background-color: $active-bg;
      color: $color-primary;
    }
  }
}
</style>
