import s from "./Post.module.css";


const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' />
            {props.message}<br/>
            <span>likes: {props.likesCount}</span>
        </div>

    );
}

export default Post;