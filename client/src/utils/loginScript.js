import axios from "axios";

export default {
    login: function(email,password){
        axios.post("/api/user/login",{
            email: email,
            password:password
        }).catch((error)=>{
            alert("We were not able to log you in! Please check your credentials")
        })               
        .then(()=>{
            (axios.get("/api/user/user_data"))
            .then((res)=>{
                alert("Welcome "+res.data.username+ "!")
                console.log(res.data.username + " has been logged in")})
    })
    document.getElementById("signup-username").value = ""
    document.getElementById("signup-email").value = ""
    document.getElementById("signup-password").value = ""
    document.getElementById("login-email").value = ""
    document.getElementById("login-password").value = ""
    }
}