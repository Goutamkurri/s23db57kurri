var express = require('express');
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
router.get('/update', racecar_controlers.racecar_update_Page);