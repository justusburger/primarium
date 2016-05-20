import React from "react";
import { Link } from "react-router";

export default class MenuBar extends React.Component {

  render() {
    return (
      <div class="menu-bar">
        <div class="menu-bar-section text-center pt-50 plr-30 pb-30">
          <div class="profile-image" style={{backgroundImage: "url('/images/profile.jpg')"}}></div>
          <a class="menu-link mt-5">Justus Burger <i class="material-icons pull-right">expand_more</i></a>
        </div>
        <div class="menu-bar-section ptb-10">
          <ul class="menu-list">
            <li><Link to="/" activeClassName="active"><i class="material-icons pull-left">dashboard</i> Dashboard</Link></li>
            <li><Link to="/users" activeClassName="active"><i class="material-icons pull-left">account_box</i> Users</Link></li>
          </ul>
        </div>
      </div>
    );
  }

}