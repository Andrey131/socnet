import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SETCURRENTPAGE'
const SET_TOTAL_USERS_COUNT = 'SETTOTALUSERSCOUNT'
const TOGGLE_IS_FETCHING = 'TOGGLEISFETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWINGINPROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
}
const usersReducer = (state= initialState, action) => {

    switch (action.type){
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }

        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map( user => {
                    if(user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }

        case SET_CURRENT_PAGE:{
            return {
                ...state, currentPage: action.currentPage
            }
        }

        case SETUSERS:{
            return{ ...state, users: [...action.users]}
        }

        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }

        case TOGGLE_IS_FETCHING:{
            return{
                ...state, isFetching: action.isFetching
            }
        }

        case FOLLOWING_IN_PROGRESS:{
            return{
                ...state, followingInProgress: action.followingInProgress
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SETUSERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (followingInProgress) => ({type: FOLLOWING_IN_PROGRESS, followingInProgress})

export const getUsers = (currentPage, pageSize) =>
    (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}

export const follow = (userID) =>
    (dispatch) => {
        dispatch(toggleFollowingInProgress(true))
        usersAPI.follow(userID).then(data => {
            if (data.resultCode == 0){
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingInProgress(false))
        })
    }

export const unfollow = (userID) =>
    (dispatch) => {
        dispatch(toggleFollowingInProgress(true))
        usersAPI.unfollow(userID).then(data => {
            if (data.resultCode == 0){
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleFollowingInProgress(false))
        })
    }
export default usersReducer;