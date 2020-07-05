import Vue from 'vue'
import {
  Button,
  Tree,
  Dialog,
  Input,
  Form,
  FormItem,
  MessageBox,
  Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Tree)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
