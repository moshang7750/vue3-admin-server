<template>
  <NewsDialog v-if="typeValue == 1" />
  <FieldDialog v-else-if="typeValue == 2" />
  <ServerDialog v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NewsDialog from './newsDialog.vue'
import FieldDialog from './fieldDialog.vue'
import ServerDialog from './serverDialog.vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    NewsDialog,
    FieldDialog,
    ServerDialog,
  },
  setup() {
    const route = useRoute()
    const typeValue = route.query.type
    return {
      typeValue,
    }
  },
})
</script>

<style></style>
