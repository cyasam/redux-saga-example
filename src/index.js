import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";

import store from "./redux/store";
import TodoListContainer from "./components/TodoListContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <TodoListContainer />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
