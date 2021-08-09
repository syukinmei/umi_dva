# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
<!--  -->
# 项目技术栈

1. react
   1. react函数组件+hooks
2. redux
   1. react-redux 
   2. redux-saga / redux-thunk 
      - redux-thunk 既要处理异步的action，也要处理非异步的action , 两种action混在一起
      - redux-saga 只处理异步action
      - 思维
        - 异步数据---》 redux管理
        - 非异步数据---》 组件管
3. 组件库
   1. antd 4.x.x
4. typescript 
5. umi
6. antv  数据可视化
7. fetch/axios 
8. 表格导入导出：  xlsx 

# 项目描述

1. 这个项目时一个后端管理系统，包含：用户管理、订单管理、商品管理等等 

# 项目职责

1. 我负责这个项目中用户管理、订单管理、权限管理等模块
2. 负责这个项目后期的维护和更新

# 项目亮点

1. 我采用了typescript来定义数据类型，让项目安全度进一步提高
2. 这个项目我采用了umi,可以让项目的开发效率提升 

# 项目难点

1. 项目迭代升级
2. 数据可视化 
3. hooks的应用


# 构建项目

1. https://umijs.org/zh-CN/docs/getting-started
2. 介绍目录和文件
   - mock 
     - 模拟数据文件【 express 】
   - node_modules  
     - 依赖包
   - src  源代码开发目录
     - .umi   临时文件，不要做任何操作
     - pages 页面
       - index.less  index组件的样式文件
       - index.tsx   index组件
     - .editorConfig 编辑器配置文件
     - .gitignore   git上传代码托管平台忽略配置文件
     - .prettierignore  格式化忽略配置文件
     - .prettierrc  格式化配置文件
     - .umirc.ts   项目配置文件
     - package.json  项目记录文件 
     - README.md 项目说明书，
     - tsconfig.json  ts配置文件
     - typing.d.ts   类型声明文件
     - yarn.lock  锁定项目中插件的版本



# 过程
1. 使用Umijs提供的插件 umijs/plugin-layout完成页面基本布局配置
2. 使用Umijs提供的插件 umijs/plugin-layout完成路由拓展配置
  - 侧边栏菜单数据根据路由中的配置自动生成。
  - 侧边栏菜单配置。
  - 布局路由级别展示/隐藏相关配置。
3. 使用Umijs提供的插件 umijs/plugin-dva整合dva数据流实现状态管理



### plugin-dva
1. dva数据流【就是redux】
2. 思维流程
  1. 组件通过connect函数得到dispatch
  2. 点击登录按钮，执行dispatch激活model.ts中的effects中的getLogin#umi_dva
