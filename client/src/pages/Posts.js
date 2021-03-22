import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SignUpButton from "../components/SignUpButton";
import {useAtom} from "jotai";
import { loggedIn } from "../Atoms";



function Posts() {

    const [posts, setPosts] = useState([])
    const [formObject, setFormObject] = useState([])
    //testing state with jotai below the initial state is loggedIn which is set to false which also sets areWeLoggedIn to false
    //then we run the newLoggedInStatus to change the areWeLoggedIn state to true
    const [areWeLoggedIn, changeLoggedIn] = useAtom(loggedIn)

    console.log(areWeLoggedIn)

    const newLoggedInStatus=()=>{
        changeLoggedIn(true)
        
    }
    
    

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
        if (formObject.Username && formObject.Message) {
            API.savePost({
                username: formObject.Username,
                message: formObject.Message,

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
                let videoLink = "https://www.youtube.com/embed/" + videoID
                // <iframe width="560" height="315" src=videoLink title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        <h3>No chat yet</h3>
                    )}

                <form>
                    <Input
                        onChange={handleInputChange}
                        name="Username"
                        placeholder="Username will eventually fill this (automatically hidden)"
                    />
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



                    {areWeLoggedIn === false ? (

                        <FormBtn >

                            <SignUpButton />

                        </FormBtn>

                    ) : (

                            <FormBtn

                                // disabled={!(formObject.username && formObject.message)}
                                onClick={handleFormSubmit}

                            >

                                Submit

                            </FormBtn>
                        )}


                </form>

            </Col>


        </Container>
    )
}
export default Posts