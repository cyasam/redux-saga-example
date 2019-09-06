import React from "react";
import Loader from "./Loader";

const TodoList = props => {
  return (
    <>
      <h1>Todos</h1>

      {!props.data ? (
        <p>No Data Found</p>
      ) : (
        <ul>
          {props.data.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Loader(TodoList);
