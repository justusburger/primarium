import React from "react";
import Store from "../../Store";
import { userListFetch } from "../Actions";
import { connect } from "react-redux";

class UserList extends React.Component {

  constructor() {
    super();
    Store.dispatch(userListFetch());
  }

  render() {
    return (
      <div>
        <table class="grid">
          <thead>
            <tr>
              <th class="grid-row-select">
                <a><i class="material-icons">check_box_outline_blank</i></a>
              </th>
              <th class="grid-column-min-width"></th>
              <th>Name</th>
              <th>Slug</th>
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
                  <div class="profile-image-sm pull-left mtb--5" style={{backgroundImage: 'url("' + user.avatar_urls['96'] + '")'}}></div>
                </td>
                <td>{user.name}</td>
                <td>{user.slug}</td>
                <td>{user.url}</td>
                <td class="grid-row-action">
                  <span class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown"><i class="material-icons">more_vert</i></a>
                    <ul class="dropdown-menu">
                      <li><a>Details</a></li>
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
    );
  }
  
}

export default connect((state, ownProps) => ({
  list: state.user.list
}))(UserList);