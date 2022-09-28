import React, { Component } from "react";

export default class AddNewTask extends Component {
  // Submit
  handleSubmit = (e) => {
    e.preventDefault();

    const theObject = {
      id: Math.random(),
      action: this.props.theText,
      isDone: false,
    };
    this.props.addTheTask(theObject);
  };
  render() {
    return (
      <div>
        <h1>Our Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.theText}
            onChange={(e) => this.props.theChange(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
