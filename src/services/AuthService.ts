import axios from 'axios';
var CryptoJS = require("crypto-js");

const API_URL = 'http://localhost:8080/auth/';
class AuthService {
    async login(user) {
        let isLogged = {};
        await axios.post(API_URL + 'signin', {
            email: user.email,
            password: CryptoJS.SHA256(user.password).toString()
        })
        .then(response => {
            if(response.data) {
                window.sessionStorage.setItem("JWT_token", response.data.token);

                var user = { id: response.data.id, firstname: response.data.firstname, lastname: response.data.lastname,  email: response.data.email, roles: response.data.roles }
                window.sessionStorage.setItem("user", JSON.stringify(user));
            }
            isLogged = { value:true, name:response.data.firstname };
        })
        .catch(() => {
            isLogged = { value:false };
        })

        return isLogged;
    }

    async register(user) {
        let isRegister = false;
        await axios.post(API_URL + 'signup', {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: CryptoJS.SHA256(user.password).toString()
        })
        .then(() => {
            isRegister = true;
        })
        .catch(() => {
            isRegister = false;
        })
        
        return isRegister
    }

    logout() {
        sessionStorage.clear();
    }
    
}
export default new AuthService();