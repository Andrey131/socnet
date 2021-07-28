import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from "react";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                            av={dialog.av}/>);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef();

    let addMessage = () =>{
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}

                    <div>
                        <textarea ref={newMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Message</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Dialogs;