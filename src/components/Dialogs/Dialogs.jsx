import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from "react";
import {Redirect} from "react-router-dom"


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name}
                                                                            id={dialog.id}
                                                                            av={dialog.av}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>);

    let onAddMessage = () =>{
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    if(!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}

                    <div>
                        <textarea onChange={onMessageChange}
                                  value={props.dialogsPage.newMessageText}
                                  placeholder='Enter you message'/>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Message</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Dialogs;