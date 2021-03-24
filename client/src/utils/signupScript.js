// import axios from "axios";
// import { useAtom } from "jotai";
// import { usernameG } from "../Atoms"
// import {loggedIn} from "../Atoms"





// export default {

    

//     signup: function(username,email,password) {

//         // const [whatIsTheUsername, retrieveUsername] = useAtom(usernameG)
//         // const [areWeLoggedIn, loggedInCheck] = useAtom(loggedIn)
//         // console.log(whatIsTheUsername)
//         // console.log(areWeLoggedIn)
//         // .then(()=>{retrieveUsername(res.data.username);
//         //     loggedInCheck(true)}))
        
//         var theusername;
        
//         const newUser = {
//             username: username,
//             password: password,
//             email: email
//         };
//         axios.post("/api/user/createUser", {
//             newUser
//         }).then(res => {

            // if(res.data.error == "email in use"){
            //     alert("Email has already been registered")
            // }
            // else if(res.data.error == "username in use"){
            //     alert("Username has already been registered, please choose a different username")
            // }
            // else{
            //     console.log("Account Signed Up")
            //     axios.post("/api/user/login",{
            //         email: email,
            //         password:password
            //     })                
            //     .then(()=>{(axios.get("/api/user/user_data").then((res)=>{retrieveUsername(res.data.username);
            //     loggedInCheck(true)}))
            // })
            // console.log(res.data.username + " has logged in")
            // document.getElementById("signup-username").value = ""
            // document.getElementById("signup-email").value = ""
            // document.getElementById("signup-password").value = ""
            // document.getElementById("login-email").value = ""
            // document.getElementById("login-password").value = ""
            //insert state change here
            
                
            
            
//         }                 
//     })
//     console.log(theusername)
//     return theusername
//     }
// }