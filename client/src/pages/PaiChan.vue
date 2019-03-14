<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-table
        v-if="tableData.length > 0"
        :data='tableData'
        max-height="450"
        border
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          align='center'
          width="70">
        </el-table-column>
        <el-table-column
          prop="date"
          label="创建时间"
          align='center'
          width="250"
          sortable>
          <template slot-scope="scope">
            <el-icon name="time"></el-icon>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="收支类型"
          align='center'
          width="150">
        </el-table-column>
        <el-table-column
          prop="describe"
          label="收支描述"
          align='center'
          width="180">
        </el-table-column>
        <el-table-column
          prop="income"
          label="收入"
          align='center'
          width="170">
          <template slot-scope="scope">
            <span style="color:#00d053">+ {{ scope.row.income }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="expend"
          label="支出"
          align='center'
          width="170">
          <template slot-scope="scope">
            <span style="color:#f56767">- {{ scope.row.expend }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="cash"
          label="账户现金"
          align='center'
          width="170">
          <template slot-scope="scope">
            <span style="color:#4db3ff">{{ scope.row.cash }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          align='center'
          width="220">
        </el-table-column>
        <el-table-column
          prop="operation"
          align='center'
          label="操作"
          fixed="right"
          width="180">
          <template slot-scope='scope'>
            <el-button
              type="warning"
              icon='edit'
              size="small"
              @click='onEditMoney(scope.row)'
            >编辑</el-button>
            <el-button
              type="danger"
              icon='delete'
              size="small"
              @click='onDeleteMoney(scope.row,scope.$index)'
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-row>
        <el-col :span="24">
          <div class="pagination">
            <el-pagination
              v-if='paginations.total > 0'
              :page-sizes="paginations.page_sizes"
              :page-size="paginations.page_size"
              :layout="paginations.layout"
              :total="paginations.total"
              :current-page.sync='paginations.page_index'
              @current-change='handleCurrentChange'
              @size-change='handleSizeChange'>
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PaiChan",
      data() {
        return {
          tableData: [],
          allTableData: [],
          filterTableData: [],
          dialog: {
            show: false,
            title: "",
            option: "edit"
          },
          form: {
            type: "",
            describe: "",
            income: "",
            expend: "",
            cash: "",
            remark: "",
            id: ""
          },
          //需要给分页组件传的信息
          paginations: {
            page_index: 1, // 当前位于哪页
            total: 0, // 总数
            page_size: 5, // 1页显示多少条
            page_sizes: [5, 10, 15, 20], //每页显示多少条
            layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
          },
          search_data: {
            startTime: "",
            endTime: ""
          }
        };
      }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
