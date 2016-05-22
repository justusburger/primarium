import React from "react";

export default class PublicLayout extends React.Component {

  render() {
    return (
      <div class="body-background layout-body-container">
        <div class="public-container container clearfix">
          <div class="public-container-content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }

}