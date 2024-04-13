var express = require('express')
var router = express.Router()

router.use('/user',require('./router/user'))

module.exports = router;