const mongoose = require('mongoose')
const urlBase = require('../url') // 載入 url model
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')
// 連線成功
db.once('open', () => {
  console.log('喔耶~資料庫產生成功!')
})