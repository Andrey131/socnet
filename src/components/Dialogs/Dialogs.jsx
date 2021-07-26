import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        Dima
                    </div>
                    <div className={s.dialog}>
                        Vlad
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>
                    <div className={s.dialog}>
                        Kate
                    </div>
                    <div className={s.dialog}>
                        Valera
                    </div>
                    <div className={s.dialog}>
                        Andrey
                    </div>
                </div>

                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>You</div>
                </div>
            
            </div>
        </div>
    );
}

export default Dialogs;