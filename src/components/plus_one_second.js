import React, { Component } from 'react';

export default class PlusOneSecond extends Component {

  render() {
    return (
      <div>
        <textarea onChange={this.onChange} />
        <input value="续命" type="button" onClick={this.onClick} />
      </div>
    )
  }

  onChange = event => this.setState({value: event.target.value});


  onClick = () =>  this.props.plus(this.state.value);

}
