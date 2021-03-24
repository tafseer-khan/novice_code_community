{ postreplies !== null ?
    postreplies.map(postreply => (
        <ListItem key={postreply._id}>
            <strong>
                {postreply.username} replied
        </strong>
        </ListItem>
    )) : <div style={{color: "red" }}>no replies yet</div>
}

function replyHandleInputChange(event) {
    const { name, value } = event.target;
    setReplyFormObject({ ...replyFormObject, [name]: value })
};

function replyHandleFormSubmit(event) {
    event.preventDefault();
    let activepage = document.getElementById("active").textContent
    if (postUsername && replyFormObject.Reply) {
        axios.post("/api/replies/", {
            username: postUsername,
            content: replyFormObject.Reply,
            refId: event.target._id
        })
    }
}

function deletePost(id) {
    API.deletePost(id)
        .then(res => loadPosts())
        .catch(err => console.log(err));
}

function loadReplies(id) {


    axios.get("/api/replies/" + id)
        .then((res) => {
            console.log(res)
            if (res.data === null) {

                console.log("nope")
            }
            setPostReply(res.data)
        })
        .catch(err => console.log(err));

}



function ReplyToPost(id) {
    console.log("clicked")
    loadReplies(id)

    return (



        <Container fluid>


            <Col size="col-sm">
                <List>
                    {postreplies !== null ?
                        postreplies.map(postreply => (
                            <ListItem key={postreply._id}>
                                <strong>
                                    {postreply.username} replied
                            </strong>
                            </ListItem>
                        )) : <ListItem>no replies</ListItem>
                    }
                </List>
                <form>
                    <Input
                        onChange={replyHandleInputChange}
                        name="Reply"
                    />
                    <FormBtn
                        onChange={replyHandleFormSubmit}
                    >reply
                    </FormBtn>
                </form>
            </Col>
        </Container>
    )

}