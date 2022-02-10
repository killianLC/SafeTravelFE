import axios from 'axios';
var CryptoJS = require("crypto-js");
import { useStore } from 'vuex'

const API_URL = 'http://localhost:8080/auth/';
class AuthService {
    async login(user) {
        let isLogged = false;
        await axios.post(API_URL + 'signin', {
            email: user.email,
            password: CryptoJS.SHA256(user.password).toString()
        })
        .then(response => {
            if(response.data) {
                window.sessionStorage.setItem("JWT_token", response.data.accessToken);

                var user = { id: response.data.id, firstname: response.data.firstname, lastname: response.data.lastname,  email: response.data.email, roles: response.data.roles }
                window.sessionStorage.setItem("user", JSON.stringify(user));
                const store = useStore()
                store.commit('user',JSON.stringify(user));
            }
            isLogged = true;
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

        return isRegister
    }

    logout() {
        sessionStorage.removeItem('JWT_token');
    }
    
}
export default new AuthService();