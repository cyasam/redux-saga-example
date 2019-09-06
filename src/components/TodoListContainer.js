import React from 'react';
import { connect } from 'react-redux';

import { fetchTodoListStart } from '../redux/todos/todos.sagas';
import TodoList from './TodoList';

const TodoListWrapper = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      this.props.fetchTodoList();
    }
    render() {
      const { loading, error, ...otherProps } = this.props;
      if (loading) {
        return <p>Loadingggggg...</p>;
      }

      if (error) {
        return <p>{error.message}</p>;
      }

      return <WrappedComponent {...otherProps} />;
    }
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTodoList: () => dispatch(fetchTodoListStart()),
});

export default connect(
  null,
  mapDispatchToProps,
)(TodoList);
