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
        value: newTodo,
        isDone: true,
      };

      const newList = [...this.state.todoList];
      newList.push(newitem);
      this.setState({
        todoList: newList,
        item: "",
      });
    }
  };

  handleChecked = (id) => {
    const check = [...this.state.todoList];
    console.log(check);

    const Index = check.indexOf(check.id);
    console.log(Index);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Todo App</h1>

        {this.state.todoList.map((todo) => (
          <DisplayList
            key={todo.id}
            name={todo.value}
            checked={todo.isDone}
            id={todo.id}
            onCheckboxChange={this.handleChecked}
          />
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleOnChange}
            required
          />
          <button
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
