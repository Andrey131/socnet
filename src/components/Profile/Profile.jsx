import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";


const Profile = () => {
    return (
        <div>

            <img src="https://bipbap.ru/wp-content/uploads/2017/08/2.jpg" />

            <div>
                av + description
            </div>
           <MyPosts />
        </div>
    );
}

export default Profile;