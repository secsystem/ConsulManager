import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/consul',
    component: Layout,
    redirect: '/consul/services',
    name: 'Consul 管理',
    meta: { title: 'Consul 管理', icon: 'example' },
    children: [
      {
        path: 'hosts',
        name: 'Hosts',
        component: () => import('@/views/consul/hosts'),
        meta: { title: 'Hosts', icon: 'el-icon-school' }
      },
      {
        path: 'services',
        name: '服务组',
        component: () => import('@/views/consul/services'),
        meta: { title: '服务组', icon: 'el-icon-news' }
      },
      {
        path: 'instances',
        name: '实例管理',
        component: () => import('@/views/consul/instances'),
        meta: { title: '实例管理', icon: 'el-icon-connection' }
      }
    ]
  },
  {
    path: '/nodes',
    component: Layout,
    redirect: '/nodes/jobs',
    name: 'Node 主机监控',
    meta: { title: 'Node 主机监控', icon: 'example' },
    children: [
      {
        path: 'jobs',
        name: '接入数据源',
        component: () => import('@/views/node-exporter/jobs'),
        meta: { title: '接入数据源', icon: 'el-icon-school' }
      },
      {
        path: 'lists',
        name: '云主机列表',
        component: () => import('@/views/node-exporter/lists'),
        meta: { title: '云主机列表', icon: 'el-icon-cloudy' }
      },
      {
        path: 'self',
        name: '自建主机管理',
        component: () => import('@/views/node-exporter/self'),
        meta: { title: '自建主机管理', icon: 'el-icon-s-platform' }
      },
      {
        path: 'pconfig',
        name: 'node-pconfig',
        component: () => import('@/views/node-exporter/pconfig'),
        meta: { title: 'Prometheus 配置', icon: 'el-icon-set-up' }
      },
      {
        path: 'rules',
        name: 'node-rules',
        component: () => import('@/views/node-exporter/rules'),
        meta: { title: '告警规则', icon: 'el-icon-bell' }
      },
      {
        path: 'grafana',
        name: 'node-grafana',
        component: () => import('@/views/node-exporter/grafana'),
        meta: { title: 'Grafana 看板', icon: 'el-icon-data-line' }
      }
    ]
  },
  {
    path: '/blackbox',
    component: Layout,
    redirect: '/blackbox/index',
    name: 'Blackbox 站点监控',
    meta: { title: 'Blackbox 站点监控', icon: 'tree' },
    children: [
      {
        path: 'index',
        name: '站点管理',
        component: () => import('@/views/blackbox/index'),
        meta: { title: '站点管理', icon: 'el-icon-s-order' }
      },
      {
        path: 'bconfig',
        name: 'Blackbox 配置',
        component: () => import('@/views/blackbox/bconfig'),
        meta: { title: 'Blackbox 配置', icon: 'el-icon-c-scale-to-original' }
      },
      {
        path: 'pconfig',
        name: 'Prometheus 配置',
        component: () => import('@/views/blackbox/pconfig'),
        meta: { title: 'Prometheus 配置', icon: 'el-icon-set-up' }
      },
      {
        path: 'rules',
        name: '告警规则',
        component: () => import('@/views/blackbox/rules'),
        meta: { title: '告警规则', icon: 'el-icon-bell' }
      },
      {
        path: 'grafana',
        name: 'Grafana 看板',
        component: () => import('@/views/blackbox/grafana'),
        meta: { title: 'Grafana 看板', icon: 'el-icon-data-line' }
      }
    ]
  },
  {
    path: '/avd',
    component: Layout,
    children: [{
      path: 'index',
      name: '漏洞通知',
      component: () => import('@/views/avd/index'),
      meta: { title: '漏洞通知', icon: 'el-icon-chat-line-square' }
    }]
  },
  {
    path: '快速链接',
    component: Layout,
    meta: { title: '快速链接', icon: 'link' },
    children: [
      {
        path: 'https://github.com/starsliao/ConsulManager#%E7%89%B9%E5%88%AB%E9%B8%A3%E8%B0%A2',
        meta: { title: '赞赏与鸣谢', icon: 'el-icon-cold-drink' }
      },
      {
        path: 'https://starsl.cn',
        meta: { title: 'StarsL.cn', icon: 'el-icon-s-custom' }
      },
      {
        path: 'https://github.com/starsliao?tab=repositories',
        meta: { title: '我的 Github', icon: 'el-icon-star-off' }
      },
      {
        path: 'https://grafana.com/orgs/starsliao/dashboards',
        meta: { title: '我的 Grafana', icon: 'el-icon-odometer' }
      },
      {
        path: 'https://starsl.cn/static/img/thanks.png',
        meta: { title: '我的公众号', icon: 'el-icon-chat-dot-round' }
      },
      {
        path: 'https://element.eleme.cn/#/zh-CN/component/icon',
        meta: { title: 'Element', icon: 'el-icon-eleme' }
      }

    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
