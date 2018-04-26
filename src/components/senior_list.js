import React, { Component } from 'react';
import SeniorStore from '../store/seniors.db';
import Senior from './senior';

export default class SeniorList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //SeniorStore.fetchAllSeniors();
      seniors: SeniorStore.fetchAllSeniors()
    }
  }

  renderList() {
    return Object.entries(this.state.seniors).map((seniorWithIndexArray) => {
      return (
        <Senior senior={seniorWithIndexArray[1]} />
      )
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }

}
