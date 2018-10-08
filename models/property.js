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
    }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;