const db = require("../models");

module.exports = {

    //route to get all properties
    findAll: function (req, res) {
        db.Property
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //route to get a single property
    findOne: function (req, res) {
        db.Property.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //route to get only sold properties
    findSold: function (req, res) {

    },

    //route to get only current properties
    findCurrent: function (req, res) {

    },

    //route to create a new property, accessible only if logged in
    createProperty: function (req, res) {
        db.Property
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },

    //route to update a property, accessible only if logged in
    updateProperty: function (req, res) {
        db.Property
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //route to update a property, accessible only if logged in
    deleteProperty: function (req, res) {
        
    }
};//end module exports