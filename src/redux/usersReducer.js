const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SETCURRENTPAGE'
const SET_TOTAL_USERS_COUNT = 'SETTOTALUSERSCOUNT'
const TOGGLE_IS_FETCHING = 'TOGGLEISFETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        default:
            return state;
    }
}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SETUSERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;