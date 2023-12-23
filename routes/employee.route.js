const router = require("express").Router();
const auth = require('../middlewares/authCheck')
const controller = require("../controllers/employee.controller");

const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "./public/images") },
    filename: function (req, file, cb) { cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname) }
})

var upload = multer({ storage: storage }).single('image')

router.get("/", auth.isLogIn, controller.getEmployees);

router.post("/add", upload, controller.insertEmployee)

router.post("/update", controller.updateEmployee)

router.delete("/delete/:id", controller.deleteEmployee)

module.exports = router;