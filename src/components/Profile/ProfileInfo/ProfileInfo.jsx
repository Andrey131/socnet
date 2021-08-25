import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) =>{

    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>

            <div>
                <img src={props.profile.photos.large}/>
            </div>

            <div>
                <div>
                    <a className={s.nameText}>{props.profile.fullName}</a>
                </div>
                <div>
                    <a className={s.statusText}>{props.profile.aboutMe}</a>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;