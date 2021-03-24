import React, { useState, Component } from "react"
import { FormBtn, Input } from "../components/Form"
import ReplyToPostBtn from "../components/ReplyToPostBtn"
import Posts from "./Posts"
import { useAtom } from "jotai";
import { loggedIn } from "../Atoms";
import { usernameG } from "../Atoms"
import axios from "axios";


class ReplyPosting extends Component {

    state={
        visible: false
    }
    

    
    render(){

        // const [postUsername, hopingTheUsernameGetsSet] = useAtom(usernameG)
        // const [formObject, setFormObject] = useState([])
        

        function handleFormSubmit(event) {
            event.preventDefault();
            
            
            
            axios.get("/api/user/user_data/").then(res => 
             
                axios.post("/api/replies/", {content: document.getElementById("replytext").value, username: res.data.username, refId:Posts.posts._id }))
            
            };

        return(
 
            <div className="ReplyPosting">
                
                <ReplyToPostBtn
                    onClick={() => {
                        this.setState({visible: true})
                    }}
                >reply</ReplyToPostBtn>
                {this.state.visible ? 
                <form>
                    <Input
                        name="Reply"
                        id="replytext"

                    />
                    <FormBtn
                        onClick={handleFormSubmit}
                    
                    >
                        reply
                    </FormBtn>

                </form>: null}


            </div>


        )
    }
} export default ReplyPosting