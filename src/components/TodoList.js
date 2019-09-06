import React from 'react';
import { connect } from 'react-redux';

import { fetchTodoListStart } from '../redux/todos/todos.sagas';
class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodoList();
  }
  render() {
    const { loading, error, data } = this.props;
    if (loading) {
      return <p>Loadingggggg...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }
    return (
      <>
        <h1>Todos</h1>

        {!data ? (
          <p>No Data Found</p>
        ) : (
          <ul>
            {data.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodoList: () => dispatch(fetchTodoListStart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(TodoList);
