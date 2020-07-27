// functional components
import React from 'react';

// function Greet() {
//     return <h1>Srini</h1>
// }

// export const Greet = () => <h1>Srini</h1>;

/*const Greet = props => {
  return (
    <div>
      <h1>Hello {props.name} {props.greet}</h1>
      {props.children}
    </div>
  )
};*/

// destructuring in parameters
/*const Greet = ({name, greet, children}) => {
  return (
    <div>
      <h1>Hello {name} {greet}</h1>
      {children}
    </div>
  )
};*/

// destructuring in function body
const Greet = props => {
  const {name, greet, children} = props;
  return (
    <div>
      <h1>Hello {name} {greet}</h1>
      {children}
    </div>
  )
};

export default Greet
