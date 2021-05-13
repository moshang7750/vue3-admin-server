<template>
  <div class="af-tag">
    <div v-for="tag in tagLabels" :key="tag" class="af-tag-item pointer">
      {{ tag }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { AsideItem } from '@/types/common.types'
import { useRoute } from 'vue-router'
import { findPatentValue } from '@/libs/utils'
export default defineComponent({
  props: {
    tagData: {
      type: Array as PropType<AsideItem[]>,
      default: () => {
        return []
      },
    },
  },
  setup(props) {
    let pathName = useRoute().meta.name

    let tagLabels = computed(() => {
      pathName = useRoute().meta.name
      let tagLabels = findPatentValue(props.tagData, pathName, 'name')
      return tagLabels
    })
    return {
      tagLabels,
    }
  },
})
</script>

<style lang="scss" scoped>
@include b(tag) {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  @include b(tag-item) {
    margin-right: 5px;
    &::after {
      content: ' > ';
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
}
</style>
