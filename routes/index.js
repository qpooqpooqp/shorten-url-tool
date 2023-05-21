const express = require('express')

const router = express.Router()

const home = require('./modules/home')
const sortenUrls = require('./modules/sortenUrls')

router.use('/', home)
router.use('/url', sortenUrls)

module.exports = router 