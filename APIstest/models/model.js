const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    iscompleted: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("Data", dataSchema)