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
        name: 'fieldName',
        label: '领域名',
        value: '',
        itemType: 1,
        rule: [{ required: true, message: '请输入领域名', trigger: 'blur' }],
      },
      {
        required: true,
        name: 'fieldType',
        label: '类型',
        value: '',
        itemType: 3,
        rule: [{ required: true, message: '请选择类型', trigger: 'change' }],
        selectData: [
          { label: '硬件领域', value: 1 },
          { label: '软件领域', value: 2 },
        ],
      },
      {
        required: true,
        name: 'filePhotoList',
        label: '封面',
        value: [
          {
            name: 'food.jpeg',
            url:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          },
        ],
        itemType: 5,
        rule: [{ required: true, message: '请上传封面', trigger: 'change' }],
      },
      {
        required: false,
        name: 'FieldContent',
        label: '工具描述',
        value: '',
        itemType: 7,
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
