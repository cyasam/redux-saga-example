import { put, takeLatest, call } from "redux-saga/effects";

function* fetchTodoListAsync() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos");
    console.log("df");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = response.json();
    yield put({
      type: "FETCH_TODOLIST_SUCCESS",
      payload: {
        data,
        error: null
      }
    });
  } catch (error) {
    yield put({
      type: "FETCH_TODOLIST_FAILURE",
      payload: {
        error
      }
    });
  }
}

export function* fetchTodoListStart() {
  yield takeLatest("FETCH_TODOLIST_START", fetchTodoListAsync);
}
