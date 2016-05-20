import React from "react";

export default class UserList extends React.Component {
  
  render() {
    var users = [
      {
        id: 1,
        name: 'Justus',
        surname: 'Burger',
        joined: '3 months ago'
      },
      {
        id: 2,
        name: 'Roeline',
        surname: 'Burger',
        joined: '1 week ago'
      },
      {
        id: 3,
        name: 'Belinda',
        surname: 'Burger',
        joined: '4 months ago'
      },
      {
        id: 4,
        name: 'David',
        surname: 'Burton',
        joined: '1 year ago'
      },
      {
        id: 5,
        name: 'Geoff',
        surname: 'Newmarch',
        joined: '3 months ago'
      }
    ];
    return (
      <div>
        <table class="grid">
          <thead>
            <tr>
              <th class="grid-row-select">
                <a><i class="material-icons">check_box_outline_blank</i></a>
              </th>
              <th>Name</th>
              <th>Joined</th>
              <th class="grid-column-min-width"></th>
            </tr>
          </thead>
          <tbody>
            { users.map((user) => (
              <tr key={user.id}>
                <td class="grid-row-select">
                  <a><i class="material-icons">check_box_outline_blank</i></a>
                </td>
                <td>{user.name} {user.surname}</td>
                <td>{user.joined}</td>
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