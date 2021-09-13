module.exports = {
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
}