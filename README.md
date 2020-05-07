# umi 脚手架

## Getting Started
安装依赖
```bash
$ yarn
```

本地调试
```bash
$ yarn start
```

打包
```bash
$ yarn build
```

## 目录结构
```
src
  |_pages       页面/所有路由组件存放在这里。
  |_model       处理数据
  |_services    处理业务逻辑
  |_ layouts    布局
  |_components  组件
  |_.umi        临时文件目录，比如入口文件、路由等，都会被临时生成到这里
  |_public      存储图片等,此目录下所有文件会被 copy 到输出路径。
  |_dist        执行 yarn build 后，产物默认会存放在这里。
  |_mock        存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。
```
## 代码分层
pages触发一个action,然后model监听到了,去调动service,处理业务逻辑,请求后端数据等,把结果返回,model拿到这个结果渲染页面;
```pages => model => services => pages```
