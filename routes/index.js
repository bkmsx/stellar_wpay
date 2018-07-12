var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', testController.show_alert);
router.get('/test/register', testController.register_get);
router.post('/test/register', testController.register_post);
router.get('/detail/:id', testController.transaction_detail);
module.exports = router;
