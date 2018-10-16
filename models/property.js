const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//set up property Schema
const propertySchema = new Schema({
    propertyName: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
    },
    summary: {
        type: String
    },
    yearBuilt: {
        type: Number
    },
    strategy: {
        type: String
    },
    location: {
        type: String
    },
    returnOnEquity: {
        type: Number
    },
    internalRateOfReturn: {
        type: Number
    },
    disposition: {
        type: String
    },
    propertySold: {
        type: Boolean,
        required: true
    },
    pic1: {
        type: String
    },
    pic2: {
        type: String
    },
    pic3: {
        type: String
    },
    pic4: {
        type: String
    },
    pic5: {
        type: String
    }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;