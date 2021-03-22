import axios from "axios";

export default {
    login: function(email,password){
        axios.post("/api/user/login", {
            email: email,
            password: password,
        })
        .then(res =>{
            axios.get("/api/user/user_data")
            .then(res =>{
                console.log(res.data.username + " has been logged in")
                if(res.data.username !== null){
                    // Change State here
                }
            })
        })
    }
}