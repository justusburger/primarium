import React from "react";

import MenuBar from "../components/MenuBar";

export default class FullLayout extends React.Component {

  render() {
    return (
      <div class="body-background layout-body-container">
        <div class="main-container container clearfix">
          <div class="layout-sidebar">
            <MenuBar/>
          </div>
          <div class="layout-main-content">
            <div class="p-30">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }

}