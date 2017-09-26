import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}
