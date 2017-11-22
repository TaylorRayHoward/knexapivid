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

  componentDidMount() {
    axios.get('/api/todo').then(response => {
      this.setState({
        loading: false,
        todos: response.data
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <h1>Loading...</h1>
      );
    }
    return (
      <div style={{
        marginBottom: '1.25rem'
      }}>
      <ListItems>
        {this.renderTodos()}
      </ListItems>
      </div>
    );
  }

  renderTodos() {
    return _.map(this.state.todos, todo => {
      return (
        <ListItem key={todo.id} title={todo.title} isDone={todo.is_done} id={todo.id}/>
      );
    });
  }
}

export default ItemsBody;