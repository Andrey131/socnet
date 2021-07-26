import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Kate'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Andrey'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ]


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Dima" id="1"/>
                    <DialogItem name="Vlad" id="2"/>
                    <DialogItem name="Sveta" id="3"/>
                    <DialogItem name="Kate" id="4"/>
                    <DialogItem name="Valera" id="5"/>
                    <DialogItem name="Andrey" id="6"/>
                </div>

                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;