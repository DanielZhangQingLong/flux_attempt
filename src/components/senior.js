import React, { Component } from 'react';

export default class Senior extends Component {
  render() {
    return (
      <li>
        <img src={this.props.senior.url}></img>
      </li>
    );
  }
}
