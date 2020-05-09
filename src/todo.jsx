import React, { Component } from "react";
import DisplayList from "./displayList";

class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 0,
          name: "Vikas",
          checked: true,
        },
        {
          id: 1,
          name: "Nitesh",
          checked: false,
        },
        {
          id: 2,
          name: "Amit",
          checked: true,
        },
      ],
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
