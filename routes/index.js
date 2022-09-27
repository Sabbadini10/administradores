var express = require('express');
var router = express.Router();
const { about,admin,contact,index,login,services} = require('../controllers/mainController');
const admi = require('../middleware/admi')
/* GET home page. */
router
    .get("/", index)
    .get("/contact", contact)
    .get("/about", about)
    .get("/services", services)
    .get("/admin",admi, admin)
    .get("/login", login)

module.exports = router;
