import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import { Image } from "@chakra-ui/react"

const Header = (props) => {
    return (
        <header className={s.header}>
            <Image
                    borderRadius="full"
                    boxSize="50px"
                    objectFit="cover"
                    m={2}
                    src='https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_960_720.png' />

            <div className={s.loginBlock}>
                { props.isAuth ? <NavLink to ={'/profile'}>{props.login}</NavLink>
                 : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;