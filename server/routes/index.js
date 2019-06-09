const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/wakeup', (req, res, next) => res.json('👌'))

router.get('*', (req, res, next) => res.status(404).json({ msg: 'Not found' }))

router.get('/', (req, res, next) => res.render('index'))


module.exports = router;
