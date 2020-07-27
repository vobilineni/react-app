import React from 'react';

const Hello = () => {
  // with JSX.
  return (
    <div className='helloClass'>
      <h1>Hello</h1>
    </div>
  )
  // without JSX.
  /*return React.createElement('div', {id: 'hello', className: 'helloClass'}, React.createElement('h1', null, 'Hello Srini'))*/
};

export default Hello;
