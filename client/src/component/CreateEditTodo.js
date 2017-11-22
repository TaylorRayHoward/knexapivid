import React, { Component } from 'react';
import axios from 'axios';

class SingleTodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      isDone: props.isDone || false
    };
    this.onChangeItem = this.onChangeItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeItem(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, isDone } = this.state;
    const { id } = this.props;
    if (id) {
      axios.put(`/api/todo/${id}`, {
        title: title,
        is_done: isDone
      }).then(() => {
        this.props.updateState(title, isDone);
        this.props.onSubmit();
      });
    }
    else {
      axios.post('/api/todo', {
        title: title,
        is_done: isDone
      }).then(() => {
        this.props.onSubmit();
      })
    }
  }

  render() {
    const { isDone, title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title of todo</label>
          <input name="title" onChange={this.onChangeItem} type="text" className="form-control" id="title"
                 value={title}/>
        </div>
        <div className="form-group">
          <label htmlFor="is-done">Todo completed?</label>
          <select name="isDone" onChange={this.onChangeItem} className="form-control" id="is-done"
                  value={isDone}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary float-left">
            Submit
          </button>
          <button type="button" className="btn btn-danger float-right"
                  onClick={this.props.onSubmit}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default SingleTodoEdit;