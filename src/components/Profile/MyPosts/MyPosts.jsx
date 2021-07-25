import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My post
                <div> New post</div>
                <div className={s.posts}>
                    <Post message='Hi, how are you' likesCount='20'/>
                    <Post message="It's my first post" likesCount='15'/>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default MyPosts;