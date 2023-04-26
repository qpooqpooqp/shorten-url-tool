const mongoose = require('mongoose') // 載入 mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('喔幹，資料庫連線失敗...')
})
// 連線成功
db.once('open', () => {
  console.log('喔耶~資料庫連線成功!')
})
module.exporets =db
