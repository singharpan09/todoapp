import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DisplayList = (props) => {
  return (
    <ul key={props.todo.id} class="list-group">
      <li class="list-group-item ">
        <input type="checkbox" checked={props.todo.checked} />
        <label>{props.todo.name}</label>
        <div class="float-right">
          {props.todo.checked && (
            <span class="badge badge-secondary">Completed</span>
          )}
        </div>
      </li>
    </ul>
  );
};

export default DisplayList;
