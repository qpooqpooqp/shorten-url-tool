const express = require('express')
const router = express.Router()

const urlBase = require('../../models/url')
const generator = require('../../ulities/generator')


// 設定縮網址功能
// 1.用findOne比對網址
// 2.有，渲染回傳
// 3.沒有，產生一個shortenCode
// 4.比對shortenCode
// 5.有用過，再產生一次(回到4)
// 6.沒用過，跟網址一起儲存
// 7.渲染回傳
router.post('', (req, res) => {
  const body = req.body
  const newUrl = body.originUrl
  const newUrlArray = newUrl.split(' ')
  const shortenCode = generator()
  urlBase.findOne({ originUrl: newUrl })
  .lean()
    .then(urls => {
      if (urls) { //輸入相同網址時，產生一樣的縮址//       
        res.render('result', { originUrl: urls.originUrl, shortenCode: urls.shortenCode })
      } else {
        res.render('result', { originUrl: newUrl, shortenCode: shortenCode },
          )
        return urlBase.create({ originUrl: newUrl, shortenCode: shortenCode },
          )
      }
    })
})
router.get('/:shortenCode', (req, res) => {
  const shortenCode = req.params.shortenCode
  return urlBase.findOne({ shortenCode })
    .lean()
    .then(urls => {
      if (urls) {
        console.log(urls.originUrl)
        res.redirect(urls.originUrl)
      } else {
        res.render('error')
      }
    })
})
module.exports = router