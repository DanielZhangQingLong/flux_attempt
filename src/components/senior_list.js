import React, { Component } from 'react';
import SeniorStore from '../store/seniors.db';
import Senior from './senior';
import PlusOneSecond from './plus_one_second';
import SeniorDispatcher from '../dispatchers/senior_dispatcher';

export default class SeniorList extends Component {

  state = { 
    seniors: SeniorStore.fetchAllSeniors()
  }

  // Once the component did mount, 
  componentDidMount() {
    console.log('componentDidMount');
    SeniorStore.addChangeListener(this.onChange);
  }

  onChange = () => this.setState({
    seniors: SeniorStore.fetchAllSeniors()
  });

  renderList() {
    return Object.entries(this.state.seniors).map((seniorWithIndexArray) => {
      return (
        <Senior key={seniorWithIndexArray[0]}  senior={seniorWithIndexArray[1]} />
      )
    });
  }


  plus(url){
    SeniorDispatcher.dispatch({
      actionType: 'PLUS1S',
      url: url
    });
  }

  //class properties + arrow function syntax
  // This gives the function context where it defined
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
