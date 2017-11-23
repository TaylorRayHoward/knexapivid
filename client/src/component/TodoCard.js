import React, { Component } from 'react';
import SingleTodoList from './SingleTodoList';
import SingleTodoEdit from './CreateEditTodo';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
    this.onDelete = this.onDelete.bind(this);
  }

  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  onDelete() {
    axios.delete(`/api/todo/${this.props.id}`).then(() => {
      this.props.history.push('/');
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
      <SingleTodoList isDone={isDone} title={title} onEdit={this.toggleEdit} onDelete={this.onDelete}/>
    );
  }
}

export default withRouter(TodoCard);