import React from 'react';

const heading ={fontSize: '40px', color: 'blue'};
const notHeading ={fontSize: '40px', color: 'black'};

function Inline(props) {
  return(<div><h1 style={props.primary ? heading : notHeading}>Inline</h1></div>)
}
export default Inline;
