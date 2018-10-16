const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//set up the team member Schema
const teamMemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

module.exports = TeamMember;