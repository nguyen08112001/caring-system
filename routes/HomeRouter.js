const express = require('express')
const router = express.Router()
const HomeController = require('../Controllers/HomeController')

router.get('/', HomeController.login)
router.post('/', HomeController.authen)


module.exports = router