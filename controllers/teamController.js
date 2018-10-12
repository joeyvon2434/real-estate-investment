const db = require("../models");

//Model for database calls to the team members collection
module.exports = {
    findAll: function (req, res) {
        db.TeamMember
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    findOne: function (req, res) {
        db.TeamMember
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    createMember: function (req, res) {
        db.TeamMember
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updateMember: function (req, res) {
        db.TeamMember
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    deleteMember: function (req, res) {
        db.TeamMember
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};