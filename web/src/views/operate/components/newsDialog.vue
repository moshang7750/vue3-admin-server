<template>
  <div class="af-means-dialog af-edit-dialog">
    <DialogForm :formData="formData" @submit-form="submitForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DialogForm from '@/components/common/dialogForm.vue'
export default defineComponent({
  components: { DialogForm },
  setup() {
    let formData = [
      {
        required: false,
        name: 'title',
        label: '标题',
        value: '',
        itemType: 1,
        rule: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
      },
      {
        required: true,
        name: 'remark',
        label: '内容简介',
        value: '',
        itemType: 2,
        rule: [{ required: true, message: '请输入备注', trigger: 'blur' }],
      },
      {
        required: true,
        name: 'type',
        label: '类型',
        value: '',
        itemType: 3,
        rule: [{ required: true, message: '请选择类型', trigger: 'change' }],
      },
      {
        required: true,
        name: 'fileList',
        label: '封面',
        value: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          },
        ],
        itemType: 5,
        rule: [{ required: true, message: '请上传图片', trigger: 'change' }],
      },
      {
        required: true,
        name: 'fileDocList',
        label: '文档',
        value: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          },
        ],
        itemType: 6,
        rule: [{ required: true, message: '请上传文档', trigger: 'change' }],
      },
      {
        required: true,
        name: 'richText',
        label: '内容',
        value: '',
        itemType: 7,
        rule: [{ required: true, message: '请输入内容', trigger: 'change' }],
      },
    ]
    const submitForm = (val: any) => {
      console.log(val, 'formValue')
    }
    return {
      submitForm,
      formData,
    }
  },
})
</script>

<style></style>
