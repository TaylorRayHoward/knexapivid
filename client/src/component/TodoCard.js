import React, { Component } from 'react';
import SingleTodoList from './SingleTodoList';
import CreateEditTodo from './CreateEditTodo';

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      title: props.title,
      isDone: props.isDone
    };
    this.onEdit = this.onEdit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  onEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  updateState(title, isDone) {

    this.setState({
      title: title,
      isDone: isDone
    });
  }

  render() {
    const { title, isDone } = this.state;
    if (this.state.editing) {
      return (
        <CreateEditTodo title={title} isDone={isDone} toggleEdit={this.onEdit} id={this.props.id}
                        updateState={this.updateState}/>
      );
    }

    return (
      <SingleTodoList title={title} isDone={isDone} onEdit={this.onEdit} id={this.props.id}/>
    );
  }
}

export default TodoCard;