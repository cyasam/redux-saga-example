import { all, call } from "redux-saga/effects";
import { fetchTodoListStart } from "./todos/todos.sagas";

export default function* rootSaga() {
  yield all([call(fetchTodoListStart)]);
}
