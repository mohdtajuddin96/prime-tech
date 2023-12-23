var express = require('express');
const auth = require('../middlewares/authCheck')
var router = express.Router();

/* GET home page. */
router.get('/', auth.isLogIn, function (req, res, next) {
  res.render('./home/index', { title: 'Home',email: req.session.email });
});
router.get('/index', auth.isLogIn, function (req, res, next) {
  res.render('./home/index', { title: 'Home',email: req.session.email });
});
router.get('/tables', auth.isLogIn, function (req, res, next) {
  res.render('./home/tables', { title: 'Tables',email: req.session.email });
});
router.get('/charts', auth.isLogIn, function (req, res, next) {
  res.render('./home/charts', { title: 'Chart JS',email: req.session.email });
});


// router.get('/login', (req, res, next)=> {
//   res.render('./account/login', {layout:'./layouts/blank', title: 'EMS Login' });
// });
// router.get('/register', (req, res, next)=> {
//   res.render('./account/register', {layout:'./layouts/blank', title: 'EMS Login' });
// });
// router.get('/logout', (req, res, next)=> {
//   res.render('./account/login', {layout:'./layouts/blank', title: 'EMS Login' });
// });

module.exports = router;
