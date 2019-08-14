import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid #0cccdd', height: '500px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;