# 项目名：**多页面脚手架**
## 项目运行
```
// 进去项目目录，下载项目所需的包
npm install
// 开发环境下运行
npm run dev
// 测试环境打包
npm run build_stag
// 生产环境打包
npm run build_prod
```
## 功能介绍

* **生产环境**. 生产环境分为测试与正式，分别对应不同配置，打包后的包在./public/下面，正式为production文件夹，测试为staging
* **国际化**.该项目用react-intl为国际化方案，我把它封装成一个国际组件在./src/library/components/i18n_provide,需要国际化则引用该组件。
* **组件通信**.该项目用mobox为组件通信方案，如果需要使用则在每个页面组件里新建sotre.js参照案例编写，即可愉快玩耍mobox。
* **单页面**.该项目用react-router-dom/history为组件通信，场景：如果你的页面ui比较复杂需要进行单页面方案那么在这套脚手架里此方案可帮你解决。