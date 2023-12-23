const router = require('express').Router();
const accControl = require('../controllers/account.controller')
const auth=require('../middlewares/authCheck')

router.get('/',auth.isLogOut, accControl.LoginPage)
router.get('/login',auth.isLogOut, accControl.LoginPage)
router.get('/Users',auth.isLogIn, accControl.GetUsers)
router.post('/logout',accControl.LogOut)
router.post('/login', accControl.verifyUser)
router.get('/register',auth.isLogOut, accControl.RegisterPage)
router.post('/register', accControl.InsertUser)

module.exports = router