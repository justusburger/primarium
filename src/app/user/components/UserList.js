import React from "react";
import { userListFetch } from "../Actions";
import { connect } from "react-redux";
import { Link } from "react-router";

class UserList extends React.Component {

  componentDidMount() {
    this.props.dispatch(userListFetch());
  }

  render() {
    return (
      <div>
        <div class="action-bar">
          <a class="action-bar-btn pull-right btn btn-accent"><i class="material-icons">person_add</i></a>
        </div>
        <div class="bg-white plr-30 pt-30 pb-15">
          <h1 class="page-title">Users</h1>
        </div>
        <div class="bg-white plr-15">
          <ul class="tabs-menu">
            <li class="active"><a>Active</a></li>
            <li><a>Inactive</a></li>
            <li><a>All</a></li>
          </ul>
        </div>
        <div class="p-30">
          <table class="grid">
            <thead>
              <tr>
                <th class="grid-row-select">
                  <a><i class="material-icons">check_box_outline_blank</i></a>
                </th>
                <th class="grid-column-min-width"></th>
                <th>Name</th>
                <th>Email</th>
                <th>Url</th>
                <th class="grid-column-min-width"></th>
              </tr>
            </thead>
            <tbody>
              { this.props.list.isFetching ? (
                <tr class="grid-fetching">
                  <td colSpan="1000">
                    <div class="loader"></div>
                  </td>
                </tr>
              ) : null }
              { this.props.list.items.map((user) => (
                <tr key={user.id}>
                  <td class="grid-row-select">
                    <a><i class="material-icons">check_box_outline_blank</i></a>
                  </td>
                  <td>
                    <div class="profile-image-sm pull-left mtb--5" style={{backgroundImage: 'url("' + user.avatarUrls['96'] + '")'}}></div>
                  </td>
                  <td class="grid-link"><Link to={'/users/' + user.id}>{user.name}</Link></td>
                  <td>{user.email}</td>
                  <td>{user.url}</td>
                  <td class="grid-row-action">
                    <span class="dropdown">
                      <a class="dropdown-toggle" data-toggle="dropdown"><i class="material-icons">more_vert</i></a>
                      <ul class="dropdown-menu">
                        <li><Link to={'/users/' + user.id}>Details</Link></li>
                        <li><a>Remove</a></li>
                        <li><a>Suspend</a></li>
                        <li><a>Message</a></li>
                      </ul>
                    </span>
                  </td>
                </tr>
                )) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
}

export default connect((state, ownProps) => ({
  list: state.user.list
}))(UserList);