<template>
  <div class="af-aside">
    <div v-for="item in routeData" :key="item.id">
      <template v-if="item.children">
        <div class="af-aside-item-common af-aside-item">
          {{ item.name }}
        </div>
        <div
          v-for="node in item.children"
          :key="node.id"
          class="af-aside-item-common af-aside-node pointer"
          :class="{
            'is-active': node.link == routePath,
          }"
          @click="asideClick(node)"
        >
          {{ node.name }}
        </div>
      </template>
      <template v-else>
        <div
          class="pointer af-aside-item-common is-noChild"
          :class="{
            'is-active': item.link == routePath,
          }"
          @click="asideClick(item)"
        >
          {{ item.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { AsideItem } from '@/types/common.types'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  props: {
    asideData: {
      type: Array as PropType<AsideItem[]>,
    },
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    let routePath = computed(() => route.path)
    let routeData = computed(() => props.asideData || [])
    const asideClick = (aside: AsideItem) => {
      router.push(`${aside.link}`)
    }
    return {
      routeData,
      routePath,
      asideClick,
    }
  },
})
</script>

<style lang="scss" scoped>
@mixin flex-y {
  display: flex;
  align-items: center;
}

@include b(aside) {
  width: 200px;
  background-color: $color-white;

  @include b(aside-item-common) {
    padding: 15px 0;
    border-bottom: 1px solid #c9c9c9;

    @include when(active) {
      color: $color-normal;
      background: $active-bg;
    }
    @include when(noChild) {
      padding-left: 70px;
    }
  }
  @include b(aside-item) {
    padding-left: 60px;
  }
  @include b(aside-node) {
    padding-left: 80px;
  }
}
</style>
