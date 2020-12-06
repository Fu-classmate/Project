const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/index.js')

const app = new express()

// 挂载静态资源
app.use(express.static('../前端代码'))

// post
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 挂载router
app.use(router)

app.listen(3000,()=>{
	console.log('启动成功 http://localhost:3000')
})

