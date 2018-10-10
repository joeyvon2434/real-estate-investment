//use axios for calls to the back end
import axios from "axios";

//export the calls to the back end for use in the react
export default {

    getAllProperties: () => {
        return axios.get("/api/properties");
    },

    createNewProperty: (propertyData) => {
        axios.post("/api/properties/create", propertyData);
    }
};