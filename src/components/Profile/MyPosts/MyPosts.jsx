import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {


    let postData = [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'How are you?', likesCount: 15},
    ]

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
                    <Post message={postData[0].message} likesCount={postData[0].likesCount} />
                    <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;