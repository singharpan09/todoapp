import React, { Component } from "react";
import DisplayList from "./displayList";

class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({ item: e.target.value });
  };

  submitTodo = (e, newTodo) => {
    e.preventDefault();
    if (newTodo !== "") {
      const newitem = {
        id: Date.now(),
        name: newTodo,
        checked: true,
      };

      const newList = [...this.state.todoList];
      newList.push(newitem);
      this.setState({
        todoList: newList,
        item: "",
      });
    }
  };

  handleChecked = (clickchange) => {
    const check = [...this.state.todoList];
    const Index = check.indexOf(clickchange);
    console.log(Index);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Todo App</h1>

        {this.state.todoList.map((todo) => (
          <DisplayList
            key={todo.id}
            todo={todo}
            onCheckboxChange={this.handleChecked}
          />
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter todo..."
            value={this.state.item}
            onChange={this.handleOnChange}
            required
          />
          <br />
          <button
            className="btn btn-light"
            onClick={(e) => {
              this.submitTodo(e, this.state.item);
            }}
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default TODO;
