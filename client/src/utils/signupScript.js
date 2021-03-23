import axios from "axios";





export default {

    signup: function(username,email,password) {
        
        const newUser = {
            username: username,
            password: password,
            email: email
        };
        axios.post("/api/user/createUser", {
            newUser
        }).then(res => {

                axios.post("/api/user/login", {
                                email: email,
                                password: password
                })

        }).then(res =>{
            axios.get("/api/user/user_data")
            .then(res =>{
                console.log(res.data.username + " has been logged in")
                if(res.data.username !== null){
                    // Change state here
                }
            })
        })

    }
}