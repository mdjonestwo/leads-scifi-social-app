const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClipSchema = new Schema({
    Video: {
        type: String
    },
    Title: {
        type: String
    },
    User: {
        type: String
    },
    Caption: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const Clip = mongoose.model("Clip", ClipSchema);

module.exports = Clip;