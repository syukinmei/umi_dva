// 编写路由表
export const routes = [
    {
        path: '/welcome',
        component: '@/pages/Welcome',
        name: '首页',
        icon: 'HomeOutlined'
    }, {
        path: '/users',
        name: '用户管理',
        icon: 'UserOutlined',
        // routes 是二级路由
        routes: [
            {
                path: '/users',
                name: '用户列表',
                component: '@/pages/UserManage',
                icon: 'AppstoreFilled', // ?
            }
        ]
    }, {
        path: '/rights',
        name: '权限管理',
        icon: 'BulbFilled',
        routes: [
            {
                path: '/rights/roleList',
                name: '角色列表',
                component: '@/pages/RightsManage/RoleList'
            }, {
                path: '/rights/rightsList',
                name: '权限列表',
                component: '@/pages/RightsManage/RightsList'
            }
        ]
    }, {
        path: '/goods',
        name: '商品管理',
        icon: 'ShoppingFilled',
        routes: [
            {
                path: '/goods/list',
                name: '商品列表',
                component: '@/pages/GoodsManage/GoodsList'
            }, {
                path: '/goods/params',
                name: '分类参数',
                component: '@/pages/GoodsManage/SortParams',
            }, {
                path: '/goods/sort',
                name: '商品分类',
                component: '@/pages/GoodsManage/GoodsSort'
            }
        ]
    }, {
        path: '/orders',
        name: '订单管理',
        icon: 'AccountBookFilled',
        routes: [
            {
                path: '/orders',
                name: '订单列表',
                component: '@/pages/OrderManage',
                wrappers: [
                    '@/wrappers/auth',
                ],
            }
        ]
    }, {
        path: '/reports',
        name: '数据统计',
        icon: 'SignalFilled',
        routes: [
            {
                path: '/reports',
                name: '数据报表',
                component: '@/pages/DataReports',
            }
        ]
    }, {
        path: '/',
        component: '@/pages/Login',
        // 不展示顶栏
        headerRender: false,
        // 不展示页脚
        footerRender: false,
        // 不展示菜单
        menuRender: false,
        // 不展示菜单顶栏
        menuHeaderRender: false,
    }, {
        path: '/login',
        component: '@/pages/Login',
        // 不展示顶栏
        headerRender: false,
        // 不展示页脚
        footerRender: false,
        // 不展示菜单
        menuRender: false,
        // 不展示菜单顶栏
        menuHeaderRender: false,
    }, {
        path: '*',
        component: '@/pages/NotFound'
    }
]