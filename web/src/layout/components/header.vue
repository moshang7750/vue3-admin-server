<template>
  <div class="af-header">
    <div class="af-between">
      <div class="af-logo"></div>
      <div class="af-menu">
        <div
          class="af-menu-item pointer"
          v-for="(item, index) in menuData"
          :key="index"
        >
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="af-userInfo">admin</div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    const menuState = computed(() => store.state.routerData)
    return {
      menuData: menuState,
    }
  },
})
</script>

<style lang="scss" scoped>
@include b(header) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: calc(100% - 40px);
  height: 60px;
  background-color: rgba(22, 26, 38, 0.9);
  color: $color-white;
  @include b(between) {
    display: flex;
    align-items: center;
  }
  @include b(logo) {
    width: 217px;
    height: 30px;
    background: url('~@/assets/imanges/basic/logo.png') no-repeat;
    background-size: contain;
  }
  @include b(menu) {
    display: flex;
    margin-left: 60px;
    @include b(menu-item) {
      font-size: 18px;
      margin-right: 30px;
      a {
        color: $color-white;
        @include blue-common();
      }
    }
  }
}
</style>
