<template>
  <el-form
    :model="ruleFormData"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="af-common-ruleForm"
  >
    <el-form-item
      v-for="formMoudle in formData"
      :key="formMoudle.name"
      :label="formMoudle.label"
      :required="formMoudle.required"
    >
      <el-input
        v-if="formMoudle.itemType == 1"
        v-model="ruleFormData[formMoudle.name]"
      />
      <el-input
        v-else-if="formMoudle.itemType == 2"
        type="textarea"
        v-model="ruleFormData[formMoudle.name]"
      />
      <el-select
        v-else-if="formMoudle.itemType == 3"
        v-model="ruleFormData[formMoudle.name]"
        clearable
      >
        <el-option
          v-for="(selectItem, index) in formMoudle.selectData"
          :key="index"
          :label="selectItem.label"
          :value="selectItem.value"
        />
      </el-select>
      <template v-else-if="formMoudle.itemType == 4">
        <el-date-picker
          v-model="ruleFormData[formMoudle.name]"
          :format="'YYYY-MM-DD'"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </template>
      <template v-else-if="formMoudle.itemType == 5">
        <el-upload
          class="upload-demo"
          action=""
          :on-remove="handlePhotoRemove"
          :file-list="ruleFormData[formMoudle.name]"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </template>
      <template v-else-if="formMoudle.itemType == 6">
        <el-upload
          class="upload-demo"
          action=""
          :on-remove="handleFileRemove"
          :file-list="ruleFormData[formMoudle.name]"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              只能上传 jpg/png 文件，且不超过 500kb
            </div>
          </template>
        </el-upload>
      </template>
      <template v-else-if="formMoudle.itemType == 7">
        <!-- <VueUeditorWrap /> -->
      </template>
    </el-form-item>
    <div class="af-formItem-footer">
      <el-button @click="goBack">返回</el-button>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
type FormItem = {
  required: boolean
  name: string
  label: string
  value: string | Array<any> | number
  itemType: number
  rule: Array<any>
  selectData?: Array<any>
  tableData?: Array<any>
}

import { FileListItem } from '@/types/jurisdiction.type'
import { useRouter } from 'vue-router'
import { defineComponent, PropType, reactive, ref, toRefs } from 'vue'
export default defineComponent({
  components: {},
  props: {
    formData: {
      type: Array as PropType<FormItem[]>,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const router = useRouter()
    let formMoudle = reactive({
      ruleFormData: {} as { [key: string]: any },
      rules: {} as { [key: string]: any },
    })
    props.formData.forEach((formItem: FormItem) => {
      formMoudle.ruleFormData[formItem.name] = formItem.value
      formMoudle.rules[formItem.name] = formItem.rule
    })
    const handlePhotoRemove = (
      file: FileListItem,
      fileList: FileListItem[]
    ) => {
      console.log(file, fileList)
    }
    const handleFileRemove = (file: FileListItem, fileList: FileListItem[]) => {
      console.log(file, fileList)
    }
    /* 表單提交事件 */
    const ruleForm: any = ref(null)
    const submitForm = () => {
      ruleForm.value.validate((valid: boolean) => {
        if (valid) {
          emit('submit-form', formMoudle.ruleFormData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    const goBack = () => {
      router.go(-1)
    }
    return {
      ...toRefs(formMoudle),
      handlePhotoRemove,
      handleFileRemove,
      ruleForm,
      submitForm,
      goBack,
    }
  },
})
</script>

<style lang="scss" scoped>
@include b(common-ruleForm) {
  @include b(formItem-footer) {
    @include flex-x;
    .el-button {
      @include flex-x-y;
      width: 140px;
      height: 40px;
      margin-right: 20px;
    }
  }
}
</style>
