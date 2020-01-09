import Vue from 'vue'
import VueRouter from 'vue-router'
import Mocha from '../views/Mocha.vue'
import AlbumManger from "../views/AlbumManger";
import Api from '../views/Api.vue'
import Crawler from '../views/Crawler.vue'
import Import from '../views/Import.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'albumManager',
    component: AlbumManger
  },
  {
    path: '/crawler',
    name: 'crawler',
    component: Crawler
  },
  {
    path: '/import',
    name: 'import',
    component: Import
  },
  {
    path: '/mocha',
    name: 'mocha',
    component: Mocha
  },
  {
    path: '/api',
    name: 'api',
    component: Api
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
