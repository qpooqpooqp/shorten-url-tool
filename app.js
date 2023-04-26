// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const routes = require('./routes')
require('./config/mongoose')
const app = express()

// 設定首頁路由
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

// 設定 port 3000
app.listen(3000, () => {
  console.log('喔耶~網站連線成功!')
})