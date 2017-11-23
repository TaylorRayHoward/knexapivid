import React from 'react';

const ListItem = ({ text }) => {
  console.log(text);
  return (
    <li className="list-group-item">
      {text}
    </li>
  );
};

export default ListItem;