import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div className="items">
        <div
          className="box"
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color
          }}
        />
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}
