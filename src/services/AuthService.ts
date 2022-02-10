import axios from 'axios';
var CryptoJS = require("crypto-js");

const API_URL = 'http://localhost:8080/auth/';
class AuthService {
    login(user) {
        return axios.post(API_URL + 'signin', {
            email: user.email,
            password: CryptoJS.SHA256(user.password).toString()
        })
        .then(response => {
            if(response.data.accessToken) {
                window.localStorage.setItem("JWT_token", response.data.accessToken);
            }
        })
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: CryptoJS.SHA256(user.password).toString()
        });
    }

    logout() {
        localStorage.removeItem('JWT_token');
    }
    
}
export default new AuthService();