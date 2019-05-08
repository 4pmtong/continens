# A storybook with typescript styled-jsx

> insight通用组件库，基于material-ui，用storybook管理，可视化开发调试

----

## 开始

```bash
# 安装依赖
$ npm i   # OR yarn install

# 本地开发
$ npm run storybook   # OR yarn storybook

# 构建组件库
$ npm run build   # OR yarn build

# 构建storybook静态资源
$ npm run build-storybook   # OR yarn build-storybook
```

----

## 目录

项目目录结构如下

```
.
├── lib/                           // 默认的组件输出目录
├── .storybook/
    ├── config.js                  // storybook配置
    ├── addons.js                  // addons配置
    ├── myTheme.js                 // theme配置
    ├── webpack.config.js          // story的webpack配置（storybook有自己的webpack配置）
├── components/                    // 组件库
├── extra/                         // 编写story时的辅助组件库 (可选)
└── stories/
    ├──tes/
      ├── ***.note.md              // story相应的notes文档，组件使用说明
    ├── readme/
      ├── ***.readme.md            // story相应的readme文档，组件props参数说明
    ├── ***.stories.js             // 组件对应的story
├── storybook-static/              // run build-storybook生成的静态文件目录
├── components.json                // 组件打包时的webpack入口文件对应索引
├── webpack.config.js              // 组件打包时的webpack配置
├── README.md
└── package.json
```
