import React from "react";
import { connect } from "react-redux";
import { userDetailAction } from "../_actions/users-detail.action";
import { withRouter } from "react-router-dom";

class UserDetail extends React.Component {
  componentDidMount() {
    this.props.getUserById(this.props.match.params.id);
  }
  render() {
    const { userDetail } = this.props;
    console.log(12342343242342);
    console.log(this.props.match.params.id);
    console.log(userDetail);
    const user = userDetail.items;
    return (
      <div className="user-detail">
        <h2> USER DETAIL </h2>
        {userDetail.loading && (
          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        )}
        {userDetail.error && (
          <span className="text-danger">ERROR: {userDetail.error}</span>
        )}
        {userDetail.items && (
          <ul>
            <li> {user.full_name} </li>
            <li> {user.gender == 0 ? "male" : "female"} </li>
            <li> {user.email} </li>
            <li> {user.password} </li>
            <li> {user.birthday} </li>
            <li> {user.address} </li>
            <li> {user.phone} </li>
            <li> {user.group_id}</li>
            <li>{user.position_id}</li> 
            <li>
              {" "}
              {(() => {
                switch (user.status) {
                  case 1:
                    return "not active";
                  case 2:
                    return "actived";
                  case 3:
                    return "deleted";
                  default:
                    return "not active";
                }
              })()}
            </li>
          </ul>
        )}
      </div>
    );
  }
}
const mapSate = (state) => {
  const { userDetail } = state;
  return { userDetail };
};
const actionCreator = {
  getUserById: userDetailAction.getUserById,
};
export default withRouter(connect(mapSate, actionCreator)(UserDetail));
