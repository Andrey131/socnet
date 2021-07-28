import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    let postsElements = props.postsData.map(post =>  <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={s.postsBlock}>
            <div>
                <h2>My post</h2>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value ={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;