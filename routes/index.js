var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/login', function(req, res, next){
  let str = toString(req.body);
  console.log(`接收到请求${str}`);
  let returnMsg = {
    returnCode: 0,
    returnMassage: '成功'
  }
  res.send(returnMsg);
})

module.exports = router;
