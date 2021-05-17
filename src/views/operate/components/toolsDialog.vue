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
        name: 'toolName',
        label: '工具包名',
        value: '',
        itemType: 1,
        rule: [{ required: true, message: '请输入资料名', trigger: 'blur' }],
      },
      {
        required: true,
        name: 'toolType',
        label: '类型',
        value: '',
        itemType: 3,
        rule: [{ required: true, message: '请选择类型', trigger: 'change' }],
        selectData: [
          { label: '硬件测试工具', value: 1 },
          { label: '软件测试工具', value: 2 },
        ],
      },
      {
        required: true,
        name: 'filePhotoList',
        label: '工具封面',
        value: [
          {
            name: 'food.jpeg',
            url:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          },
        ],
        itemType: 5,
        rule: [
          { required: true, message: '请上传工具封面', trigger: 'change' },
        ],
      },
      {
        required: false,
        name: 'toolRemark',
        label: '简介',
        value: '',
        itemType: 2,
      },

      {
        required: false,
        name: 'toolDesc',
        label: '工具描述',
        value: '',
        itemType: 7,
      },
      {
        required: false,
        name: 'toolDetailedList',
        label: '工具清单',
        value: '',
        itemType: 8,
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
