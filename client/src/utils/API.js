//use axios for calls to the back end
import axios from "axios";

//export the calls to the back end for use in the react
export default {

    getAllProperties: () => {
        return axios.get("/api/properties");
    },

    createNewProperty: (propertyData) => {
        return axios.post("/api/properties/create", propertyData);
    },

    findOne: (property) => {
        return axios.get("/api/properties/property/" + property.id);
    },

    updateProperty: (property) => {
        return axios.put("/api/properties/property/" + property._id, property);
    },

    removeProperty: (id) => {
        return axios.delete("/api/properties/property/" + id);
    }
};