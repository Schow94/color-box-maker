import React, { Component } from 'react';
import BoxForm from './BoxForm';
import Box from './Box';
import './BoxList.css';
import uuid from 'uuid/v4';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { height: 10, width: 10, color: 'blue', id: uuid() },
        { height: 5, width: 5, color: 'red', id: uuid() }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.remove = this.remove.bind(this);
  }

  addItem(box) {
    this.setState(() => ({
      boxes: [...this.state.boxes, box]
    }));
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  renderItems() {
    return (
      <div className="Boxes">
        {this.state.boxes.reverse().map(box => (
          <Box
            remove={this.remove}
            key={box.id}
            id={box.id}
            className="box"
            height={box.height}
            width={box.width}
            color={box.color}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="Box-List">
        <h1>Create a Box</h1>
        <BoxForm addItem={this.addItem} />
        {this.renderItems()}
      </div>
    );
  }
}
