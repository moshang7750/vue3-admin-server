<template>
  <div class="af-content-dialog af-edit-dialog">
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
        name: 'activeName',
        label: '活动标题',
        value: '',
        itemType: 1,
        rule: [{ required: true, message: '请输入资料名', trigger: 'blur' }],
      },
      {
        required: true,
        name: 'activeDate',
        label: '活动时间',
        value: [],
        itemType: 4,
        rule: [{ required: true, message: '请选择活动时间', trigger: 'blur' }],
      },
      {
        required: true,
        name: 'activeAddress',
        label: '活动地点',
        value: '',
        itemType: 1,
        rule: [{ required: true, message: '请输入活动地点', trigger: 'blur' }],
      },
      {
        required: true,
        name: 'filePhotoList',
        label: '封面',
        value: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          },
        ],
        itemType: 5,
        rule: [
          { required: true, message: '请上传活动封面', trigger: 'change' },
        ],
      },
      {
        required: true,
        name: 'activeContent',
        label: '活动内容',
        value: '',
        itemType: 7,
        rule: [
          { required: true, message: '请输入活动内容', trigger: 'change' },
        ],
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
