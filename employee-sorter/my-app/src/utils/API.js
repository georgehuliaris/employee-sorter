import axios from "axios";

export default {
    getUsers: async function() {
        return axios.get("https://randomuser.me/api?results=200")
    }
};