<template>
  <div class="af-content-dialog af-edit-dialog">
    <el-form
      :model="ruleFormData"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="角色名" prop="roleName">
        <el-input v-model="ruleFormData.roleName"></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="roleDescribe">
        <el-input
          type="textarea"
          :rows="4"
          v-model="ruleFormData.roleDescribe"
        ></el-input>
      </el-form-item>
      <el-form-item label="菜单权限">
        <el-tree
          :data="treeData"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps"
        >
        </el-tree>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup() {
    const ruleFormData = reactive({
      roleName: '',
      roleDescribe: '',
      jurisdiction: [],
    })
    const treeData = ref([
      {
        id: 1,
        label: '一级 1',
        children: [
          {
            id: 4,
            label: '二级 1-1',
            children: [
              {
                id: 9,
                label: '三级 1-1-1',
              },
              {
                id: 10,
                label: '三级 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: '一级 2',
        children: [
          {
            id: 5,
            label: '二级 2-1',
          },
          {
            id: 6,
            label: '二级 2-2',
          },
        ],
      },
      {
        id: 3,
        label: '一级 3',
        children: [
          {
            id: 7,
            label: '二级 3-1',
          },
          {
            id: 8,
            label: '二级 3-2',
          },
        ],
      },
    ])
    const defaultProps = {
      children: 'children',
      label: 'label',
    }
    const rules = ref({
      roleName: [
        { required: true, message: '请输入角色名称', trigger: 'blur' },
      ],
      jurisdiction: [
        {
          type: 'array',
          required: true,
          message: '请选择菜单权限',
          trigger: 'change',
        },
      ],
    })
    console.log(rules, 'rules')
    const ruleForm: any = ref(null)
    const submitForm = () => {
      ruleForm.value.validate((valid: boolean) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    return {
      ruleFormData,
      rules,
      ruleForm,
      submitForm,
      treeData,
      defaultProps,
    }
  },
})
</script>

<style></style>
