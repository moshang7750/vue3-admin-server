<template>
  <div class="af-layout">
    <Header />
    <div class="af-main">
      <Asider :asideData="aisderData" />
      <div class="af-container">
        <Tag :tagData="tagData" />
        <div class="af-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from './components/header.vue'
import Asider from './components/asider.vue'
import Tag from './components/tag.vue'
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { AsideItem } from '@/types/common.types'
export default defineComponent({
  components: { Header, Asider, Tag },
  setup() {
    const route = useRoute()
    const store = useStore()
    const routerState = computed(() => store.state.routerData)
    const headRouteData = computed(() =>
      routerState.value.map((item: AsideItem) => item.link)
    )
    const aisderData = ref([])
    const tagData = ref([])
    const routeChange = (value: string) => {
      if (headRouteData.value.includes(value)) {
        const routeChangeData = routerState.value.filter(
          (item: AsideItem) => item.link === value
        )
        tagData.value = routeChangeData
        aisderData.value = routeChangeData[0].children
      }
    }
    routeChange(route.path)

    watch(
      () => route.path,
      (newd) => {
        routeChange(newd)
      }
    )
    console.log(aisderData, tagData)
    return {
      aisderData,
      tagData,
    }
  },
})
</script>

<style lang="scss">
@include b(layout) {
  background: #f1f1f1;
  @include b(main) {
    display: flex;
    height: calc(100vh - 60px);
    @include b(container) {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 20px 20px 20px;

      @include b(content) {
        flex: 1;
        padding: 20px;
        background-color: $color-white;
      }
    }
  }
}
</style>
