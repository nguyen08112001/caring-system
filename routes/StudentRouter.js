const express = require('express')
const router = express.Router()
const StudentController = require('../Controllers/StudentController')

router.get('/select', StudentController.select)
router.get('/update/:id', StudentController.update)

module.exports = router