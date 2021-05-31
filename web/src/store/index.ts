import { State } from '@/types/vuex'
import { createStore } from 'vuex'

const state: State = {
  routerData: [
    {
      id: 1,
      name: '首页',
      link: '/home',
      children: [],
    },
    {
      id: 2,
      name: '会员',
      link: '/member',
      children: [
        {
          id: 40,
          link: '/member',
          name: '会员管理',
        },
      ],
    },
    {
      id: 3,
      name: '运营',
      link: '/operate/content',
      children: [
        {
          id: 10,
          name: '内容管理',
          link: '/operate/content',
        },
        {
          id: 11,
          name: '资料管理',
          link: '/operate/means',
        },
        {
          id: 12,
          name: '活动管理',
          link: '/operate/activity',
        },
        {
          id: 13,
          name: '工具管理',
          link: '/operate/tools',
        },
        {
          id: 14,
          name: '栏位管理',
          link: '/operate/field',
        },
      ],
    },
    {
      id: 4,
      name: '审核',
      link: '/examine',
      children: [
        {
          id: 25,
          link: '/examine',
          name: '审核管理',
        },
      ],
    },
    {
      id: 5,
      name: '平台',
      link: '/platform/user',
      children: [
        {
          id: 30,
          name: '权限管理',
          children: [
            {
              id: 31,
              name: '用户管理',
              link: '/platform/user',
            },
            {
              id: 32,
              name: '用户组管理',
              link: '/platform/userGroup',
            },
            {
              id: 33,
              name: '角色管理',
              link: '/platform/role',
            },
          ],
        },
        {
          id: 35,
          name: '基础管理',
          children: [
            {
              id: 36,
              name: '网站信息管理',
              link: '/platform/message',
            },
            {
              id: 37,
              name: '留言管理',
              link: '/platform/departure',
            },
          ],
        },
      ],
    },
  ],
}

export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {},
})
