<template>
  <div class="main-wrapper">
    <el-button @click="addDialogVisible=true"
               type="primary">add post</el-button>
    <div class="main-table animated fadeInUp">
      <el-table :data="tableData"
                border>
        <el-table-column prop="articleTitle"
                         label="Title"
                         align="center"
                         min-width="100">
        </el-table-column>
        <el-table-column prop="articleContent"
                         label="Content"
                         width="180"
                         align="center"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="articleViewCount"
                         label="ViewCount"
                         width="180"
                         align="center"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="articleLikeCount"
                         label="LikeCount"
                         width="180"
                         align="center"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="articleCommentCount"
                         label="CommentCount"
                         width="180"
                         align="center"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="articleContent"
                         label="Content"
                         width="180"
                         align="center"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="createTime"
                         label="CreateTime"
                         min-width="180"
                         align="center">
          <template slot-scope="scope">{{moment(scope.row.createTime).format('YYYY-MM-DD H:mm')}}</template>
        </el-table-column>
        <el-table-column prop="articleDate"
                         label="PublishDate"
                         width="180"
                         align="center">
          <template slot-scope="scope">{{scope.row.articleDate?moment(scope.row.articleDate).format('YYYY-MM-DD H:mm'):'--'}}</template>
        </el-table-column>
        <el-table-column prop="articleStatus"
                         label="Status"
                         width="180"
                         align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.articleStatus == 0"
                    type="success">Released</el-tag>
            <el-tag v-else-if="scope.row.articleStatus == 1"
                    type="warning">Draft</el-tag>
            <el-tag v-else-if="scope.row.articleStatus == 2"
                    type="danger">Deleted</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="Operate"
                         width="180"
                         align="center"
                         fixed="right">
          <template slot-scope="scope">
            <el-button type="text">View</el-button>
            <el-button type="text"
                       @click="handleEdit(scope.row)">Edit</el-button>
            <el-button type="text">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0"
                  :total="total"
                  :page.sync="pageNum"
                  :limit.sync="pageSize" />
    </div>
    <article-add :addDialogVisible.sync="addDialogVisible"
                 v-if="addDialogVisible"></article-add>
    <article-edit :editDialogVisible.sync="editDialogVisible"
                  :info="detailInfo"
                  v-if="editDialogVisible"></article-edit>
  </div>
</template>

<script>
import { articleAdd, articleEdit } from './components/'
import { getArticleList } from '@/api/article'

export default {
  components: { articleAdd, articleEdit },
  data () {
    return {
      addDialogVisible: false,
      editDialogVisible: false,
      detailInfo: {},

      total: 1,
      pageNum: 1,
      pageSize: 10,
      tableData: [
      ]
    }
  },
  created () { this.getArticleList() },
  methods: {
    getArticleList () {
      const params = {
        article_title: '',
        article_content: '',
        pageNum: 1,
        pageSize: 10,
      }
      getArticleList(params).then(res => {
        if (res.code === 0) {
          this.tableData = res.data
        }
      })
    },
    handleEdit (row) {
      this.detailInfo = row
      this.editDialogVisible = true
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
