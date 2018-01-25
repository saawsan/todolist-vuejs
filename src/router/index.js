import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import UserAccount from '@/components/UserAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    }, {
      path: '/my-account',
      name: 'UserAccount',
      component: UserAccount
    }
  ]
})
