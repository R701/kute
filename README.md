# kute
一个 Vue 2.0 网页组件库

## 状态
开发中...

Still under development...

## 参与开发
### 开发所需知识
- Vue 2.0
- Webpack 2.0
- ES6
- Stylus
- Nuxt
- ITCSS
- rscss
- Axis

以及了解一部分的
- Node.js
- ESlint
- Postcss
- cssnext
- cssnano

### 开发指南

```bash
$ git clone https://github.com/R701/kute.git
$ cd kute
```
#### 进行开发
1. 在`kute/`目录下：
```bash
npm run dev
```
这将会使用`webpack.dev.config.js`这个配置文件启动webpack。

该配置使用watch模式，监听源代码，并实时构建，生成未经压缩的结果文件（`kute.js`和`kute.css`）放在`dev/static/kute`目录下，便于`dev/example/index.html`直接引用，进行简单的测试。

2. 进入`kute/dev`，启动项目主页的开发进程
```bash
$ cd dev && npm run dev
```
项目主页直接用Nuxt构建，Nuxt帮我们做好了目录结构和webpack配置等工作，具体各文件和目录的作用，请参照[Nuxt官方文档](https://nuxtjs.org/guide)。

3. 浏览器地址栏输入[http://localhost:3000/components](http://localhost:3000/components)打开项目主页，或者[http://localhost:3000/example/index.html](http://localhost:3000/example/index.html)打开简易预览页，都可以进行组件预览。前者使用`kute/src`目录下的源文件在nuxt中构建，后者直接使用`dev/static/kute`目录下的静态文件（实时生成的，参见第1点）。

4. 未完待更。
#### 进行构建
1. 构建kute:

在`kute/`目录下：
```bash
npm run build
```
构建完成的文件在`kute/dist`目录中。

2. 构建主页：

在`kute/dev`目录下：
```bash
npm run build
```
构建完成的文件在`kute/dev/.nuxt`目录中。


## TO DO

- [ ] **Container** add to showcase page.
- [ ] **Container** add scrolling.