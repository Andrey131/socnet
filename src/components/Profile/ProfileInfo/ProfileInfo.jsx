import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return (
        <div>
            <img src="https://bipbap.ru/wp-content/uploads/2017/08/2.jpg" />
            <div className={s.descriptionBlock}>
                av + description
            </div>
        </div>
    );
}

export default ProfileInfo;