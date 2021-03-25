import React, { useState, Component } from "react"
import { FormBtn, Input } from "../components/Form"
import ReplyToPostBtn from "../components/ReplyToPostBtn"
import Posts from "./Posts"
import { useAtom } from "jotai";
import { loggedIn } from "../Atoms";
import { usernameG } from "../Atoms"
import axios from "axios";


class ReplyPosting extends Component {

    state = {
        visible: false
    }
    newReply = {
        visible: false
    }



    render() {

        
        const { refId, username } = this.props;

        function handleFormSubmit(event) {
            event.preventDefault();
            axios.post("/api/replies/", { content: document.getElementById("replytext").value, username: username, refId: refId })
            document.getElementById("replytext").value = ""
            makeReplyDiv();
            
            
        };

        

        

        return (

            <div className="ReplyPosting">

                <ReplyToPostBtn
                    onClick={() => {
                        this.setState({ visible: true })
                        // this.setNewReply({ visible: true})
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

                    </form> : 
                null}

                {this.newReply.visible ?  
                <ul>
                    <li>
                        something

                    </li>
                </ul> : null}

            </div>


        )
    }
} export default ReplyPosting