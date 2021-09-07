import {profileAPI, usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS='SET-STATUS'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi', likesCount: 20},
        {id: 2, message: 'How are you?', likesCount: 15},
        {id: 3, message: 'Im fine', likesCount: 21},
    ],
    newPostText: "HUY",
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }

        case SET_STATUS: {
            return{
                ... state, status: action.status
            }
        }

        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfileInfo = (userID) => (dispatch) => {

    profileAPI.getProfileInfo(userID).then(data => {
        dispatch(setUserProfile(data))
    })
}

export const getStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then(data => {
        dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status).then(data => {
        if(data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer;