
import React, { Component } from "react";
import "./customcard.css";

class ClassProps extends Component {
  render() {
    return (
      <div className="user-card">
        <img src={this.props.url} alt="user" />
        <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
        <button>{this.props.button}</button>
      </div>
    );
  }
}

export default ClassProps;
