import { combineReducers } from "redux";
import { todoListReducer } from "./todos/todos.reducer";

export default combineReducers({
  todoList: todoListReducer
});
