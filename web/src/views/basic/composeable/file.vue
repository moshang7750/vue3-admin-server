<template>
  <div class="af-file">
    <div class="af-file-common af-flex">
      <p class="af-file-title">注册用户协议</p>
      <div>
        <div class="af-radio">
          <el-radio-group v-model="agreement">
            <el-radio :label="1">上传附件</el-radio>
            <el-radio :label="2">输入文本</el-radio>
          </el-radio-group>
        </div>

        <el-upload
          v-if="agreement == 1"
          class="upload-demo"
          action=""
          :on-remove="handleRemoveAgreement"
          :file-list="agreemetFileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>

        <el-input
          v-else
          type="textarea"
          :rows="4"
          placeholder="请输入协议内容"
          v-model="agreementDoc"
        >
        </el-input>
      </div>
    </div>
    <div class="af-file-common af-flex">
      <p class="af-file-title">法律申明及隐私条款</p>
      <div>
        <div class="af-radio">
          <el-radio-group v-model="clause">
            <el-radio :label="1">上传附件</el-radio>
            <el-radio :label="2">输入文本</el-radio>
          </el-radio-group>
        </div>
        <el-upload
          v-if="clause == 1"
          class="upload-demo"
          action=""
          :on-remove="handleRemoveClause"
          :file-list="clauseFileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>

        <el-input
          v-else
          type="textarea"
          :rows="4"
          placeholder="请输入协议内容"
          v-model="clauseDoc"
        >
        </el-input>
      </div>
    </div>
    <div class="af-file-common af-flex">
      <p class="af-file-title">登陆是否启动图形验证码</p>
      <div>
        <el-radio-group v-model="graphical">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { MessageDoc, MessageFile } from '@/types/jurisdiction.type'
import { useAreementFile } from '../hooks/useFile'
export default defineComponent({
  setup() {
    const radioGroup: MessageFile = reactive({
      agreement: 1,
      clause: 1,
      graphical: 1,
    })
    const docTextarea: MessageDoc = reactive({
      agreementDoc: '',
      clauseDoc: '',
      agreemetFileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      clauseFileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    })
    const useAgreementFiles = useAreementFile()
    return {
      ...toRefs(radioGroup),
      ...toRefs(docTextarea),
      ...useAgreementFiles,
    }
  },
})
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
    @include b(radio) {
      margin-bottom: 20px;
    }
  }
}
</style>
