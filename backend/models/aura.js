const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const auraSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },  

},{
    timestamps: true,
});

const AURA = mongoose.model("AURA",auraSchema,"bride");
module.exports = AURA;