const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
switch (action.type) {
    case SEND_MESSAGE: {
        let text = state.newMessageText
        return {
            ...state,
            newMessageText: '',
            messagesData: [...state.messagesData, {id: 7, message: text}]
        }
    }

    case UPDATE_NEW_MESSAGE_TEXT: {
        return {
            ...state,
            newMessageText: action.newText
        }
    }

    default:
        return state;
}
}


export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;