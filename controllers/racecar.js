var racecar = require('../models/racecar');
// List of all racecar
exports.racecar_list = async function(req, res) {
    try{
    theracecar = await racecar.find();
    res.send(theracecar);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific racecar.
//exports.racecar_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: racecar detail: ' + req.params.id);
//};
// for a specific racecar.
exports.racecar_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await racecar.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle racecar create on POST.
exports.racecar_create_post = async function(req, res) {
    console.log(req.body)
    let document = new racecar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"racecar_type":"goat", "cost":12, "size":"large"}
    document.driver = req.body.driver;
    // document.constructor = req.body.constructor;
    document.ranking = req.body.ranking;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle racecar delete form on DELETE.
exports.racecar_delete = function(req, res) {
res.send('NOT IMPLEMENTED: racecar delete DELETE ' + req.params.id);
};
// Handle racecar update form on PUT.
//exports.racecar_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: racecar update PUT' + req.params.id);
//};
// Handle racecar update form on PUT.
exports.racecar_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await racecar.findById( req.params.id)
    // Do updates of properties
    if(req.body.driver)
    toUpdate.driver = req.body.driver;
    if(req.body.ranking) toUpdate.ranking = req.body.ranking;
    //if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// VIEWS
// Handle a show all view
exports.racecar_view_all_Page = async function(req, res) {
    try{
    theracecar = await racecar.find();
    res.render('racecar', { title: 'racecar Search Results', results: theracecar });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };