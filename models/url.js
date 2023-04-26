const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  originUrl: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  shortenCode: {
    type: String, // 資料型別是字串
    required: false 
  },
  done: {
    type: Boolean
  }
})
module.exports = mongoose.model('Url', urlSchema)