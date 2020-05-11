import React from "react";

const Edittodo = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <input type="text" value={props.value} />
      <button
        onClick={() => {
          props.handleEdit(props);
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
};
export default Edittodo;
