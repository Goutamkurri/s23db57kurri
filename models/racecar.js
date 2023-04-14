const mongoose = require("mongoose")
const racecarSchema = mongoose.Schema({
driver: String,
constructor: String,
ranking: Number
})
module.exports = mongoose.model("racecar",racecarSchema)