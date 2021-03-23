import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Youtube from "../utils/Youtube";
import { Link } from "react-router-dom"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SignUpButton from "../components/SignUpButton";
import { useAtom } from "jotai";
import { loggedIn } from "../Atoms";
import { usernameG } from "../Atoms"
import axios from "axios";



function Posts() {

    const [posts, setPosts] = useState([])
    const [video, setVideo] = useState([])
    const [formObject, setFormObject] = useState([])
    //testing state with jotai below the initial state is loggedIn which is set to false which also sets areWeLoggedIn to false
    //then we run the newLoggedInStatus to change the areWeLoggedIn state to true
    const [areWeLoggedIn, changeLoggedIn] = useAtom(loggedIn)

    //creates the global zeUsername variable
    const [postUsername, hopingTheUsernameGetsSet] = useAtom(usernameG)
    


    useEffect(() => {
        loadPosts()
    }, [])

    function loadPosts() {
        API.getUserPost()
            .then(res =>
                setPosts(res.data)
            )
            .catch(err => console.log(err));

    };

    function deletePost(id) {
        API.deletePost(id)
            .then(res => loadPosts())
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("handle form")
        console.log(postUsername)
        console.log(document.getElementById("active").textContent)
        let activepage = document.getElementById("active").textContent
        if (postUsername && formObject.Message) {
            axios.post("/api/posts/",{
                username: postUsername,
                content: formObject.Message,
                title: formObject.Subject,
                category: activepage
            })
                .then(res => {
                    loadPosts()
                    console.log(res)
                })
                .catch(err => console.log(err));
        }
        if (formObject.Subject) {
            let searchTerms = formObject.Subject.replace(/\s/g, '');
            console.log(searchTerms);
            searchYoutube(searchTerms);
        }
    };

    function searchYoutube(searchTerms) {
        Youtube.getVideos(searchTerms)
            .then(res => {
                let videoID = res.data.items[0].id.videoId;
                let videoLink = "https://www.youtube.com/embed/" + videoID;
                setVideo(videoLink);
            }
            )
            .catch(err => console.log(err));
    };

    //use this to decide state of sign in
    // function setSignedIn(){

    // }

    return (

        <Container fluid>

            <Col size="col-lg">

                {posts.length ? (
                    <List>
                        {posts.map(post => (
                            <ListItem key={post._id}>
                                <Link to={"/posts/" + post._id}>
                                    <strong>
                                        {post.username} said {post.content}
                                    </strong>
                                </Link>
                                <DeleteBtn onClick={() => deletePost(post._id)} />
                            </ListItem>
                        ))}

                    </List>
                ) : (
                        <h3>No chat yet, non-signed in will be able to view posts, but not submit their own</h3>
                    )}






                {areWeLoggedIn === false ? (

                    <div  //if areWeLoggedIn equals false the sign up button is displayed, if not- the form submit button is displayed
                    >

                        <SignUpButton />
                        

                    </div>





                ) : (
                        <form>
                            <p>
                                
                                You are logged in as {postUsername}
                            </p>
                            <Input
                                onChange={handleInputChange}
                                name="Subject"
                                placeholder="Subject"
                            />
                            <Input
                                onChange={handleInputChange}
                                name="Message"
                                placeholder="What would you like to ask?"
                            />

                            <FormBtn

                                // disabled={!(formObject.username && formObject.message)}
                                onClick={handleFormSubmit}

                            >

                                Submit

                        </FormBtn>
                        </form>
                    )}




                {video.length > 0 ? (
                    <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                ) : (
                        null
                    )}

            </Col>


        </Container>
    )
}
export default Posts