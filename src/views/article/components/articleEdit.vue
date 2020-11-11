<template>
  <el-drawer :visible="editDialogVisible"
             title="Edit Post"
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
    editDialogVisible: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => { }
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
  created () {
    this.postForm = {
      title: this.info.articleTitle,
      content: this.info.articleContent
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:editDialogVisible', false)
    }
  },

};
</script>
