import React, { Component } from 'react';
import SingleTodoList from './SingleTodoList';
import SingleTodoEdit from './CreateEditTodo';

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      title: props.title,
      isDone: props.isDone
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  handleState(title, done) {
    this.setState({ title, isDone: done });
  }

  render() {
    const { isDone, title } = this.state;
    if (this.state.editing)
      return (
        <SingleTodoEdit isDone={isDone} title={title} onSubmit={this.toggleEdit} id={this.props.id}
                        updateState={this.handleState}/>
      );
    return (
      <SingleTodoList isDone={isDone} title={title} onClick={this.toggleEdit}/>
    );
  }
}

export default TodoCard;