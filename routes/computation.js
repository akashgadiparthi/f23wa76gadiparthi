var express = require('express');
var router = express.Router();
 
/* get HOME PAGE. */
router.get('/', function(req, res, next) {
  var x = req.query.x;
 
 
  if(x!=null){
    var rand=x;
  }
  else{
    var rand = Math.floor(Math.random()*100);
  }
 
  var atan = Math.atan(rand,0);
  var exp = Math.exp(rand);
  var expm1 = Math.expm1(rand);
  res.render('computation', {title: `Function atan is applied to ${rand} is ${atan},Function exp is applied to ${rand} is ${exp},Function expm1 is applied to ${rand} is ${expm1}` });
});
 
module.exports = router;