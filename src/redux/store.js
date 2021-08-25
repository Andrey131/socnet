import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi', likesCount: 20},
                {id: 2, message: 'How are you?', likesCount: 15},
                {id: 3, message: 'Im fine', likesCount: 21},
            ],
            newPostText: "HUY"
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dima', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
                {id: 2, name: 'Vlad', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
                {id: 3, name: 'Sveta', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
                {id: 4, name: 'Kate', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
                {id: 5, name: 'Valera', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'},
                {id: 6, name: 'Andrey', av: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageText: ""
        }
    },
    _callSubscriber(){

    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}



export default store;