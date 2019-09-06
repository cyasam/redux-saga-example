import { all } from 'redux-saga/effects';
import { fetchTodoListStart } from './todos/todos.sagas';

export default function* rootSaga() {
  yield all([fetchTodoListStart()]);
}
