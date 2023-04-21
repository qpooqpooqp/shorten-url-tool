const mongoose = require('mongoose')
const Url = require('../url') // 載入 url model
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('喔幹，種子庫生產失敗...種子...種...子...')
})
// 連線成功
db.once('open', () => {
  console.log('喔耶~資料庫產生成功!')
})