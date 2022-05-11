import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/emergency'
  },
  {
    path: '/emergency',
    component: /*emergency*/ () => import( /* webpackChunkName: "emergency" */ './page/emergency/emergency.vue'),
    meta: { title: 'emergency' },
  },
  {
    path: '/drag',
    component: /*drag*/ () => import( /* webpackChunkName: "drag" */ './page/drag/drag.vue'),
    meta: { title: 'drag' },
  },
  {
    path: '/grid',
    component: /*grid*/ () => import( /* webpackChunkName: "grid" */ './page/grid/grid.vue'),
    meta: { title: 'grid' },
  },
  {
    path: '/radial',
    component: /*radial*/ () => import( /* webpackChunkName: "radial" */ './page/radial/radial.vue'),
    meta: { title: 'radial' },
  },
  {
    path: '/base',
    component: /*base*/ () => import( /* webpackChunkName: "Base" */ './page/base/base.vue'),
    meta: { title: '基础用法' },
  },
  {
    path: '/userEndpoint',
    component: /*userEndpoint*/ () => import( /* webpackChunkName: "UserEndpoint" */ './page/userEndpoint/user-endpoint.vue'),
    meta: { title: '自定义锚点用法' },
  },
  {
    path: '/tree',
    component: /*tree*/ () => import( /* webpackChunkName: "tree" */ './page/treeDemo/index.vue'),
    meta: { title: 'tree' },
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
