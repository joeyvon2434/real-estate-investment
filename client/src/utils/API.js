//use axios for calls to the back end
import axios from "axios";

//export the calls to the back end for use in the react
export default {
    //property API routes
    //========================================
    //gets all propertis from backend database
    getAllProperties: () => {
        return axios.get("/api/properties");
    },

    //creates new property from submitted data
    createNewProperty: (propertyData) => {
        return axios.post("/api/properties/create", propertyData);
    },

    //finds one property based on user selection
    findOne: (property) => {
        return axios.get("/api/properties/property/" + property);
    },

    //updates a property based on user input
    updateProperty: (property) => {
        return axios.put("/api/properties/property/" + property._id, property);
    },

    //deletes a property
    removeProperty: (id) => {
        return axios.delete("/api/properties/property/" + id);
    },

    //Team member API routes
    //========================================
    //gets all team members from database
    getAllTeamMembers: () => {
        return axios.get("/api/team");
    },

    //creates a new team member
    createNewTeamMember: (member) => {
        return axios.post("/api/team/create", member);
    },
    //finds a single member based on user input
    findOneMember: (id) => {
        return axios.get("/api/team/member/" + id);
    },

    //updates a single member
    updateMember: (memberInfo) =>{
        return axios.put("/api/team/member/" + memberInfo._id, memberInfo);
    },
    //deletes a team member
    removeMember: (id) => {
        return axios.delete("/api/team/member/" + id);
    },

    //Email Route send email through the nodemailer package
    //==========================================
    sendEmail: (messageDetails) => {
        return axios.post("/sendEmail", messageDetails);
    }
};