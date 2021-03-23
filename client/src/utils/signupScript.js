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
            if(res.data.error == "email in use"){
                alert("Email has already been registered")
            }
            else if(res.data.error == "username in use"){
                alert("Username has already been registered, please choose a different username")
            }
            else{
                console.log("Account Signed Up")
                axios.post("/api/user/login",{
                    email: email,
                    password:password
                })                
                .then(()=>{(axios.get("/api/user/user)data"))
            })
            console.log(res.data.username + " has logged in")
            document.getElementById("signup-username").value = ""
            document.getElementById("signup-email").value = ""
            document.getElementById("signup-password").value = ""
            document.getElementById("login-email").value = ""
            document.getElementById("login-password").value = ""
            //insert state change here
            }
        }                 
        )

    }
}