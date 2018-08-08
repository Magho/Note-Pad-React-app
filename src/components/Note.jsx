import React from 'react';

const Note = (props) => {
  return (
      <div>
          <h3>{props.note.title}</h3>
          <div>{props.note.details}</div>
      </div>
  );
};

export default Note;