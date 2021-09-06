import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom"


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID){
            userID = 19388;
        }
        this.props.getProfileInfo(userID)
    }

    render(){
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    )
}
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileInfo})(withUrlDataContainerComponent);