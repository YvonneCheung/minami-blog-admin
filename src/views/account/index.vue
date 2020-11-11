<template>
  <div class="main-wrapper">
    <!-- <el-button type="primary">add</el-button> -->
    <div class="main-table animated fadeInUp">
      <el-table :data="tableData"
                border>
        <el-table-column prop="name"
                         label="Title"
                         min-width="100">
        </el-table-column>
        <el-table-column prop="date"
                         label="Date"
                         min-width="140">
        </el-table-column>
        <el-table-column prop="content"
                         label="Content"
                         width="180"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="publishDate"
                         label="PublishDate"
                         width="180">
        </el-table-column>
        <el-table-column prop="status"
                         label="Status"
                         width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status == 0"
                    type="success">Released</el-tag>
            <el-tag v-if="scope.row.status == 1"
                    type="warning">Draft</el-tag>
            <el-tag v-if="scope.row.status == 2"
                    type="danger">Deleted</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="Operate"
                         width="180">
          <template>
            <el-button type="text">View</el-button>
            <el-button type="text">Edit</el-button>
            <el-button type="text">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0"
                  :total="total"
                  :page.sync="pageNum"
                  :limit.sync="pageSize" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 1,
      pageNum: 1,
      pageSize: 10,
      tableData: [
        {
          date: '2016-05-02',
          publishDate: '2016-05-02',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄',
          status: 0
        },
        {
          date: '2016-05-04',
          publishDate: '2016-05-04',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1517 弄',
          status: 1
        },
        {
          date: '2016-05-01',
          publishDate: '2016-05-01',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1519 弄',
          status: 2
        },
        {
          date: '2016-05-03',
          publishDate: '2016-05-03',
          name: '王小虎',
          content: '上海市普陀区金沙江路 1516 弄',
          status: 0
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
</style>
