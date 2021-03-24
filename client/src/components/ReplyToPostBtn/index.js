import React from "react"



function ReplyToPostBtn(props){
    return(
        <span style={{textAlign: "right"}}className="reply-btn" {...props} role="button" tabIndex="0">
            reply⤵
        </span>
    );
} export default ReplyToPostBtn