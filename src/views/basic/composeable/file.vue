<template>
  <div class="af-file">
    <div class="af-file-common af-flex">
      <p class="af-file-title">注册用户协议</p>
      <div>111</div>
    </div>
    <div class="af-file-common af-flex">
      <p class="af-file-title">法律申明及隐私条款</p>
      <div>111</div>
    </div>
    <div class="af-file-common af-flex">
      <p class="af-file-title">登陆是否启动图形验证码</p>
      <div>111</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss" scoped>
@include b(file) {
  margin-top: 30px;
  & > div {
    margin-bottom: 60px;
    @include b(file-title) {
      width: 270px;
      font-size: 18px;
      color: $color-black;
    }
  }
}
</style>
