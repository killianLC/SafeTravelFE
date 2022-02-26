import axios from 'axios';
var CryptoJS = require("crypto-js");

const API_URL = 'http://localhost:8080/users/';
class UserService {
    async updateFirstnameAndLastname(user) {
        let isUpdated = false;
        await axios.post(API_URL + 'update_firstname_lastname', {
            id: JSON.parse(sessionStorage.getItem("user")).id,
            firstname: user.firstname,
            lastname: user.lastname
        })
        .then(() => {
            isUpdated = true;
        })
        .catch(() => {
            isUpdated = false;
        })

        return isUpdated;
    }

    async updatePassword(user) {
        let isUpdated = false;
        await axios.post(API_URL + 'update_password', {
            id: JSON.parse(sessionStorage.getItem("user")).id,
            password: CryptoJS.SHA256(user.password).toString()
        })
        .then(() => {
            isUpdated = true;
        })
        .catch(() => {
            isUpdated = false;
        })

        return isUpdated;
    }
}
export default new UserService();