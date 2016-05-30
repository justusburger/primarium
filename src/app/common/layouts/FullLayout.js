import React from "react";
import MenuBar from "../components/MenuBar";

export default class FullLayout extends React.Component {

  render() {
    var contentHeight = window.innerHeight - 100;
    return (
      <div class="body-background layout-body-container">
        <div class="main-container container clearfix">
          <div class="layout-sidebar">
            <MenuBar/>
          </div>
          <div class="layout-main-content" style={{height: contentHeight + 'px'}}>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

}