import React from "react";


function ChatSubmission() {

    return (

        <form className="needs-validation" noValidate>

            <div className="container" style={{float: "right" , marginTop: "1%"}}>
                
                <button type="button" style={{float: "right" , width: "10%"}} className="btn btn-dark" id="addPost">Submit</button>

                <input

                    className="form-control" 
                    id="post" 
                    style={{float: "right", width: "40%" , borderRadius: "10px"}}
                    rows="1" 
                    name="post"
                    placeholder="enter your question/answer">

                    

                </input>
                
                
                

            </div>
            
        </form>

    )

} export default ChatSubmission