
import axios from "axios";


export default {

    signup: function(username,email,password) {
        // const username = document.getElementById("signup-username").value
        // const password = document.getElementById("signup-password").value
        // const email = document.getElementById("signup-email").value

        const newUser = {
            username: username,
            password: password,
            email: email
        };
        axios.post("/api/user/createUser", {
            newUser
        }).then(res => {
            // login(newUser.email,newUser.password)
                axios.post("/api/user/login", {
                                email: email,
                                password: password
                })

        }).then(res =>{
            axios.get("/api/user/user_data").then(res =>console.log(res.data.username +" has been logged in"))
        })

    }
}