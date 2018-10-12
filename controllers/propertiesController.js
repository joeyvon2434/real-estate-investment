const db = require("../models");

//Controller for database calls to the properties colleection
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
        db.Property
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //route to get only sold properties
    findSold: function (req, res) {
        db.Property
        .find({propertySold: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //route to get only current properties
    findCurrent: function (req, res) {
        db.Property
        .find({propertySold: false})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
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
        db.Property
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};//end module exports