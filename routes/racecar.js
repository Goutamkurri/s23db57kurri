var express = require('express');
const racecar_controlers= require('../controllers/racecar');
var router = express.Router();
/* GET racecars */
router.get('/', racecar_controlers.racecar_view_all_Page );
module.exports = router;