module.exports = {
    lintOnSave: false,  // 关闭eslint
    publicPath: './', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    assetsDir: 'assets', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    pages: {
        //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
        index: {
            //除了 entry 之外都是可选的
            entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
            template: 'public/index.html', // 模板来源
            filename: 'index.html', // 在 dist/index.html 的输出
            title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        }
    },

    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度

    devServer: {
        before(app) {
            app.get('/api/heros', (req, res)=> {
                // 直接用response对象返回json数据给前端
                res.json([
                    { id: 1000, name: "卤蛋000", classify: "射手000" },
                    { id: 2000, name: "后羿000", classify: "射手000" }
                ])
            }).get('/api/user', (req, res)=> {
                res.json([
                    { id:1, name: "zhangsan" }
                ])
            }).get('/api/login', (req, res)=> {
                res.json([
                    { username: "王五" }
                ])
            })
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: ['src/assets/less/demo.less', 'src/assets/less/global.less']
      }
    }
};
