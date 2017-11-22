import React from 'react';
import { Link } from 'react-router-dom'

const ListItem = ({ title, isDone, id }) => {
  return (
    <Link to={`/${id}`}
      className={`list-group-item
      d-flex justify-content-center align-items-center mb-2
      ${isDone ? 'bg-success text-white' : 'bg-danger text-white'}`}>
      {title}
    </Link>
  );
};

export default ListItem;