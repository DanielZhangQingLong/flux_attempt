import React, { Component } from 'react';

export default class PlusOneSecond extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div>
        <textarea onChange={this.onChange} />
        <input value="续命" type="button" onClick={this.onClick} />
      </div>
    )
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onClick(){
    this.props.plus(this.state.value);
  }


}
