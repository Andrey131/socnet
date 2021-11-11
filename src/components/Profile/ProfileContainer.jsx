import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 19388;
        }
        this.props.getProfileInfo(userID)
        this.props.getStatus(userID)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {



        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus = {this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getProfileInfo, getStatus, updateStatus}),
    withRouter,
   // withAuthRedirect
)(ProfileContainer);