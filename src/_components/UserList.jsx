import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { usersListAction } from "../_actions";
class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsersList();
  }
  handleDeleteUser(id) {
    return () => this.props.deleteUser(id);
  }
  render() {
    const { usersList, match } = this.props;
    console.log(match);
    console.log(usersList);
    return (
      <div className="user-list">
        <h2> USER LISTS </h2>
        <Link to={`${match.path}/create`}> CREATE USER </Link>
        {usersList.loading && (
          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        )}
        {usersList.error && (
          <span className="text-danger">ERROR: {usersList.error}</span>
        )}
        {usersList.items != null ? (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Group_id</th>
                <th scope="col">Group_name</th>
                <th scope="col">Position_id</th>
                <th scope="col">Position_name</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {usersList.items.map((user) => (
                <tr className="user" key={user.id}>
                  <th scope="row"> {user.full_name} </th>
                  <td>{user.gender == 0 ? "male" : "female"}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td> {user.group_id}</td>
                  <td> {user.group_name}</td>
                  <td> {user.position_id}</td>
                  <td> {user.position_name}</td>
                  <td>
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
                      }})()
                      }
                  </td>
                  <td>
                    {user.deleting ? (
                      <em> - Deleting... </em>
                    ) : user.deleteError ? (
                      <span className="text-danger">
                        {" "}
                        - ERROR: {user.deleteError}
                      </span>
                    ) : (
                      <span>
                        {" "}
                        <a onClick={this.handleDeleteUser(user.id)}>Delete</a>
                      </span>
                    )}
                    <Link to={`${match.path}/${user.id}`}> Detail </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    );
  }
}
function mapState(state) {
  const { usersList } = state;
  return { usersList };
}

const actionCreators = {
  getUsersList: usersListAction.getAllUsers,
  deleteUser: usersListAction.delete,
};
export default withRouter(connect(mapState, actionCreators)(UserList));
