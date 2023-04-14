var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var racecar_controller = require('../controllers/racecar');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a racecar.
router.post('/racecar', racecar_controller.racecar_create_post);
// DELETE request to delete racecar.
router.delete('/racecar/:id', racecar_controller.racecar_delete);
// PUT request to update racecar.
router.put('/racecar/:id', racecar_controller.racecar_update_put);
// GET request for one racecar.
router.get('/racecar/:id', racecar_controller.racecar_detail);
// GET request for list of all racecar items.
router.get('/racecar', racecar_controller.racecar_list);
module.exports = router;