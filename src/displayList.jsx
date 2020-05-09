import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DisplayList = (props) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="checkbox"
            checked={props.checked}
            onChange={() => props.onCheckboxChange(props.id)}
          />
          {props.name}
          {props.checked && (
            <div className="float-right">
              <span className="badge badge-secondary">Completed</span>
            </div>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default DisplayList;
