import React, { Component } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      todos: {}
    };
  }

  componentWillMount() {
    axios.get('/api/todo').then((response) => {
      this.setState({ loading: false, todos: response.data });
    });
  }

  renderTodos() {
    return _.map(this.state.todos, (todo) => {
      return (
        <ListItem key={todo.id} text={todo.title} isDone={todo.is_done} id={todo.id}/>
      );
    });
  }

  render() {
    if (this.state.loading)
      return (<div>Loading...</div>);

    return (
      <ListItems>
        {this.renderTodos()}
      </ListItems>
    );
  }
}

export default ItemsBody;