import React, { Component } from 'react';
import './BoxForm.css';
import uuid from 'uuid/v4';

export default class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.addItem(newBox);
    this.setState({
      height: '',
      width: '',
      color: ''
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height: </label>
          <input
            onChange={this.handleChange}
            id="height"
            type="text"
            name="height"
            value={this.state.height}
          />
          <label htmlFor="width">Width: </label>
          <input
            onChange={this.handleChange}
            id="width"
            type="text"
            name="width"
            value={this.state.width}
          />
          <label htmlFor="color">Color: </label>
          <input
            onChange={this.handleChange}
            id="color"
            type="text"
            name="color"
            value={this.state.color}
          />
          <button>Add New Box</button>
        </form>
      </div>
    );
  }
}
