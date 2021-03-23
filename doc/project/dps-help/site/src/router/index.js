import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: dashboard,
    children: [
      {
        path: 'Overview',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue')
      },
      {
        path: 'BBN',
        component: () => import(/* webpackChunkName: "BBN" */ '../views/bbn.vue')
      },
      {
        path: 'Collection',
        component: () => import(/* webpackChunkName: "Collection" */ '../views/collection.vue')
      },
      {
        path: 'Context',
        component: () => import(/* webpackChunkName: "Context" */ '../views/context.vue')
      },
      {
        path: 'CSV',
        component: () => import(/* webpackChunkName: "CSV" */ '../views/csv.vue')
      },
      {
        path: 'dps',
        component: () => import(/* webpackChunkName: "dps" */ '../views/dps.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router