import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          name: '首页',
        },
      },
      {
        path: 'member', // 会员管理
        name: 'Member',
        meta: {
          name: '会员管理',
        },
        component: () => import('@/views/member/member.vue'),
      },
      {
        path: 'member/:id',
        name: 'MemberDialog',
        component: () => import('@/views/member/components/memberDialog.vue'),
      },
      {
        path: 'operate', // 运营管理
        name: 'Operate',
        redirect: '/operate/content',
        component: () => import('@/views/operate/operate.vue'),
        meta: {
          name: '运营',
        },
        children: [
          {
            path: 'content', // 内容管理
            name: 'Content',
            meta: {
              name: '内容管理',
            },
            component: () => import('@/views/operate/content.vue'),
          },
          {
            path: 'content/:id', // 内容管理添加
            name: 'ContentDialog',
            meta: {
              name: '内容管理',
            },
            component: () =>
              import('@/views/operate/components/contentDialog.vue'),
          },
          {
            path: 'means', // 资料管理
            name: 'Means',
            meta: {
              name: '资料管理',
            },
            component: () => import('@/views/operate/means.vue'),
          },
          {
            path: 'means/:id', // 资料管理新增
            name: 'MeansDialog',
            component: () =>
              import('@/views/operate/components/meansDialog.vue'),
          },

          {
            path: 'activity', // 活动管理
            name: 'Activity',
            meta: {
              name: '活动管理',
            },
            component: () => import('@/views/operate/activity.vue'),
          },
          {
            path: 'activity/:id', // 活动管理
            name: 'Activity',
            component: () =>
              import('@/views/operate/components/activityDialog.vue'),
          },
          {
            path: 'tools', // 工具管理
            name: 'Tools',
            meta: {
              name: '工具管理',
            },
            component: () => import('@/views/operate/tools.vue'),
          },
          {
            path: 'tools/:id', // 工具管理新增
            name: 'ToolsDialog',
            component: () =>
              import('@/views/operate/components/toolsDialog.vue'),
          },
          {
            path: 'field', // 栏位管理
            name: 'Field',
            meta: {
              name: '栏位管理',
            },
            component: () => import('@/views/operate/field.vue'),
          },
        ],
      },
      {
        path: 'examine', // 审核管理
        name: 'Examine',
        meta: {
          name: '审核',
        },
        component: () => import('@/views/examine/examine.vue'),
      },
      {
        path: 'platform', // 平台
        name: 'Platform',
        meta: {
          name: '平台',
        },
        redirect: '/platform/user',
        component: () => import('@/views/platform/platform.vue'),
        children: [
          {
            path: 'user', // 用户管理
            name: 'User',
            meta: {
              name: '用户管理',
            },
            component: () => import('@/views/jurisdiction/user.vue'),
          },
          {
            path: 'userGroup', // 用户组管理
            name: 'UserGroup',
            meta: {
              name: '用户组管理',
            },
            component: () => import('@/views/jurisdiction/userGroup.vue'),
          },
          {
            path: 'role', // 角色管理
            name: 'Role',
            meta: {
              name: '角色管理',
            },
            component: () => import('@/views/jurisdiction/role.vue'),
          },
          {
            path: 'role/:id',
            name: 'RoleDialog',
            component: () =>
              import('@/views/jurisdiction/components/roleDialog.vue'),
          },
          {
            path: 'message', // 网站信息管理
            name: 'Message',
            meta: {
              name: '网站信息管理',
            },
            component: () => import('@/views/basic/message.vue'),
          },
          {
            path: 'departure', // 留言管理
            name: 'Departure',
            meta: {
              name: '留言管理',
            },
            component: () => import('@/views/basic/departure.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to == from) {
    return
  }
  next()
})

export default router
