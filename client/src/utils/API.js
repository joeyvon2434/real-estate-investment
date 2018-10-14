//use axios for calls to the back end
import axios from "axios";

//export the calls to the back end for use in the react
export default {
    //property API routes
    //========================================
    getAllProperties: () => {
        return axios.get("/api/properties");
    },

    createNewProperty: (propertyData) => {
        return axios.post("/api/properties/create", propertyData);
    },

    findOne: (property) => {
        return axios.get("/api/properties/property/" + property);
    },

    updateProperty: (property) => {
        return axios.put("/api/properties/property/" + property._id, property);
    },

    removeProperty: (id) => {
        return axios.delete("/api/properties/property/" + id);
    },

    //Team member API routes
    //========================================
    getAllTeamMembers: () => {
        return axios.get("/api/team");
    },

    createNewTeamMember: (member) => {
        return axios.post("/api/team/create", member);
    },
    findOneMember: (id) => {
        return axios.get("/api/team/member/" + id);
    },
    updateMember: (memberInfo) =>{
        return axios.put("/api/team/member/" + memberInfo._id, memberInfo);
    },

    removeMember: (id) => {
        return axios.delete("/api/team/member/" + id);
    },

    //Email Route
    //==========================================
    sendEmail: (messageDetails) => {
        return axios.post("/sendEmail", messageDetails);
    }
};