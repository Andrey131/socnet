import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements = props.postsData.map(post =>  <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <h2>My post</h2>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;