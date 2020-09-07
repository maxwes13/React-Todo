import React from "react";

const ToDo = (props) => {



  return (
    <div
      onClick={() => props.toggleItem(props.item.id)}
      className={`item${props.item.completed ? "completed" : ""}`}
    >
      <p>{props.item.itemName}</p>
    </div>
  );
};

export default ToDo;
