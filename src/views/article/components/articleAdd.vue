<template>
  <el-drawer :visible="addDialogVisible"
             title="Add Post"
             size="100%"
             class="drawer-form"
             :close-on-click-modal="false"
             :before-close="handleClose"
             @close="handleClose">
    <el-form label-width="100px"
             ref="postForm"
             :model="postForm"
             :rules="rules">
      <el-form-item>
        <el-button class="fr ml10"
                   type="primary">Publish</el-button>
        <el-button class="fr "
                   type="warning">Draft</el-button>
      </el-form-item>
      <el-form-item label="Title"
                    prop="title">
        <el-input v-model="postForm.title"
                  clearable></el-input>
      </el-form-item>
      <el-form-item label="Content"
                    class="markdown-form"
                    prop="content">
        <div id="editor">
          <mavon-editor style="height:100%"
                        v-model="postForm.content" />
        </div>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>


export default {
  props: {
    addDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      postForm: {
        title: '',
        content: '',
      },
      rules: {
        title: [{ required: true, message: 'Title is required', trigger: 'change' }],
        content: [{ required: true, message: 'Content is required', trigger: 'change' }]
      }
    };
  },
  methods: {
    handleClose () {
      this.$emit('update:addDialogVisible', false)
    },
    publish () {

    },

  },

};
</script>
