import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "5a3d23cc-e1bd-440d-ae2c-034d43e88acf"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1 , pageSize = 10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    follow(userID){
        return instance.post(`follow/${userID}`).then(response => response.data)
    },

    unfollow(userID){
        return instance.delete(`follow/${userID}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileInfo (userID) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },

    getStatus (userID) {
        return instance.get(`profile/status/${userID}`).then(response => response.data)
    },

    updateStatus (statusBody) {
        return instance.put(`profile/status`, {status: statusBody}).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}