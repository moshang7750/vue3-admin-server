<template>
  <div class="af-picture">
    <div class="af-picture__logo af-flex">
      <p class="af-banner-title">网站logo图</p>
      <div class="af-flex">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :limit="1"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
        <img src="~@/assets/logo.png" alt="" />
      </div>
    </div>
    <div class="af-picture__banner">
      <div class="af-picture__banner__body">
        <p class="af-banner-title">网站banner图</p>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const fileList = reactive([
      {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      },
      {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      },
    ])
    const handleRemove = (file, fileList) => {
      console.log(file, fileList)
    }
    const handlePreview = (file) => {
      console.log(file)
    }
    return {
      fileList,
      handleRemove,
      handlePreview,
    }
  },
})
</script>

<style lang="scss" scoped>
@include b(picture) {
  @include e(logo) {
    margin-top: 30px;
    img {
      width: 100px;
      margin-left: 30px;
    }
    @include b(flex) {
      // align-items: center;
    }
  }

  @include b(picture__banner) {
    margin-top: 70px;
  }
  @include b(banner-title) {
    width: 160px;
    font-size: 18px;
    color: $color-black;
  }
  @include b(picture__banner__body) {
    display: flex;
  }
}
</style>
