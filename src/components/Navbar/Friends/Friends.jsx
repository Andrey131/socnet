import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div>
            <div><a><h3>Friends</h3></a></div>
            <div className={s.avatar}>
                <img src ='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' />
                <img src ='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' />
                <img src ='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png' />
            </div>
        </div>
    );
}

export default Friends;