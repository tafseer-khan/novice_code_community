import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {Link} from "react-router-dom"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



function Posts() {

    const [posts, setPosts] = useState([])
    const [formObject, setFormObject] = useState([])

    // useEffect(() => {
    //     loadPosts()
    // }, [])

    // function loadPosts() {
    //     API.getUserPosts()
    //         .then(res =>
    //             setPosts(res.data)
    //         )
    //         .catch(err => console.log(err));

    // };

    // function deletePost(id) {
    //     API.deletePost(id)
    //         .then(res => loadPosts())
    //         .catch(err => console.log(err));
    // }

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
                .then(res => {loadPosts()
                console.log(res)})
                .catch(err => console.log(err));
        }
    };

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
                        
                    </Col>
                    
                
            </Container>
        )
    }
export default Posts