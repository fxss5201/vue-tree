<template>
  <div class="tree">
    <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => appendDialog(data, 'add')">
            添加
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => appendDialog(data, 'edit')">
            编辑
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
    </el-tree>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :destroy-on-close="true">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="内容">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" size="medium" @click="addAppend">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
let id = 1000
export default {
  name: 'VueTree',
  data () {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }]
    return {
      treeData: JSON.parse(JSON.stringify(data)),
      dialogVisible: false,
      form: {
        name: ''
      },

      curData: {},
      btnFlag: ''
    }
  },
  computed: {
    dialogTitle () {
      let res
      if (this.btnFlag === 'add') {
        res = '添加内容'
      } else if (this.btnFlag === 'edit') {
        res = '编辑内容'
      }
      return res
    }
  },
  methods: {
    appendDialog (data, flag) {
      this.curData = data
      this.btnFlag = flag
      this.dialogVisible = true
    },

    addAppend () {
      if (this.btnFlag === 'add') {
        this.append(this.curData)
      } else if (this.btnFlag === 'edit') {
        this.edit(this.curData)
      }
    },

    append (data) {
      const newChild = { id: id++, label: this.form.name, children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
      this.dialogVisible = false
    },

    edit (data) {
      this.$set(data, 'label', this.form.name)
      this.dialogVisible = false
    },

    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.tree {
  /deep/ .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
}
</style>
