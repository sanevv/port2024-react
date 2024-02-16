import React from 'react';

const view = (props) => {
  let data = props.data;

  return (
    <div>
      {data.title}
    </div>
  );
};

export default view;