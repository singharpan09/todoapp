import React, { Component } from "react";
import DisplayList from "./displayList";
import todoList from "./todoList.json";

class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList,
    };
  }
  render() {
    return (
      <React.Fragment>
        <h2>Todo App</h2>
        {this.state.todoList.map((todo) => (
          <DisplayList todo={todo} />
        ))}
      </React.Fragment>
    );
  }
}

export default TODO;
