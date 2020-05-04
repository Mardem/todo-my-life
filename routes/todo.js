var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    res.render('features/todo/index')
})

router.post('/save', (req, res, next) => {
    res.json(req.body)
})

module.exports = router;