var racecar = require('../models/racecar');
// List of all racecar
exports.racecar_list = function(req, res) {
res.send('NOT IMPLEMENTED: racecar list');
};
// for a specific racecar.
exports.racecar_detail = function(req, res) {
res.send('NOT IMPLEMENTED: racecar detail: ' + req.params.id);
};
// Handle racecar create on POST.
exports.racecar_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: racecar create POST');
};
// Handle racecar delete form on DELETE.
exports.racecar_delete = function(req, res) {
res.send('NOT IMPLEMENTED: racecar delete DELETE ' + req.params.id);
};
// Handle racecar update form on PUT.
exports.racecar_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: racecar update PUT' + req.params.id);
};