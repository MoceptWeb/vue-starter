import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/hello-world.vue'
import Hello2 from '@/pages/hello-world2.vue' // Vue全局使用Router

Vue.use(Router)

export default new Router({
  routes: [ // 配置路由，这里是个数组
    { // 每一个链接都是一个对象
      path: '/', // 链接路径
      name: 'Hello', // 路由名称，
      component: Hello // 对应的组件模板
    }, {
      path: '/hi',
      component: Hello2,
      children: [ // 子路由,嵌套路由 （此处偷个懒，免得单独再列一点）
        // { path: '/', component: Hi },
        // { path: 'hi1', component: Hi1 },
        // { path: 'hi2', component: Hi2 }
      ]
    }
  ]
})
