import React from 'react';

const SingleTodoList = ({ isDone, title, onClick }) => {
  return (
    <div className={`card ${isDone ? 'bg-success text-white' : 'bg-danger text-white'}`}>
      <div className="card-block">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-text">
          {isDone ? 'This todo has been completed' : 'This todo has yet to be finished'}
        </div>
        <button className="btn btn-link float-right text-white"
                onClick={onClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default SingleTodoList;
