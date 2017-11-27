import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ text, isDone, id }) => {
  return (
    <Link to={`/${id}`} className={`list-group-item ${isDone ? 'bg-success' : 'bg-danger'}
     text-white mb-3 d-flex justify-content-center align-items-center`}>
      <h3>{text}</h3>
    </Link>
  );
};

export default ListItem;