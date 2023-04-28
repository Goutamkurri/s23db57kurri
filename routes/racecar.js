var express = require('express');
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
const racecar_controlers= require('../controllers/racecar');
var router = express.Router();
/* GET racecars */
router.get('/', racecar_controlers.racecar_view_all_Page );
module.exports = router;
/* GET detail racecar page */
router.get('/detail', racecar_controlers.racecar_view_one_Page);
/* GET create racecar page */
router.get('/create', racecar_controlers.racecar_create_Page);
/* GET create update page */
// router.get('/update', racecar_controlers.racecar_update_Page);
/* GET delete racecar page */
router.get('/delete', racecar_controlers.racecar_delete_Page);

/* GET update racecar page */
router.get('/update', secured,racecar_controlers.racecar_update_Page);
