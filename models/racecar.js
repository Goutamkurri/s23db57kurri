const mongoose = require("mongoose")
const racecarSchema = mongoose.Schema({
driver: {
    type: String,
    minlength: 2
},
constructor: String,
ranking: {
    type: Number,
    min: 0,
    max: 20,
    required: true
}
})
module.exports = mongoose.model("racecar",racecarSchema)