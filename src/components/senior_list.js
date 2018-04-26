import React, { Component } from 'react';
import SeniorStore from '../store/seniors.db';
import Senior from './senior';
import PlusOneSecond from './plus_one_second';
import SeniorDispatcher from '../dispatchers/senior_dispatcher';

export default class SeniorList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //SeniorStore.fetchAllSeniors();
      seniors: SeniorStore.fetchAllSeniors()
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SeniorStore.addChangeListener(this.onChange);
  }

  renderList() {
    return Object.entries(this.state.seniors).map((seniorWithIndexArray) => {
      return (
        <Senior senior={seniorWithIndexArray[1]} />
      )
    });
  }

  plus(url){
    SeniorDispatcher.dispatch({
      actionType: 'PLUS1S',
      url: url
    });
  }

  onChange() {
    this.setState({
      seniors: SeniorStore.fetchAllSeniors()
    })
  }



  render() {
    return (
      <ul>
        {this.renderList()}
          <h5>+1S</h5>
          <PlusOneSecond plus={this.plus} />
      </ul>
    );
  }

}
