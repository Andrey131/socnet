import Post from "./Post/Post";
import React from "react";
import { Input, Button, ButtonGroup, Text, Box } from "@chakra-ui/react"



const MyPosts = (props) => {

    let postsElements = props.postsData.map(post =>  <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <Box p={4}>
                <Text fontSize="xl" as="b">My post</Text>
                
                <Input  variant="filled"
                        focusBorderColor="pink.400"
                        mb={3}
                        onChange={onPostChange} value ={props.newPostText}/>
                
                <Button onClick={ onAddPost }>Add post</Button>
                
                <Box mt={4}>
                    {postsElements}
                </Box>
        </Box>
    );
}

export default MyPosts;