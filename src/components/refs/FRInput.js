import React from 'react';

/*function FRInput() {
  return (
    <div>
      <input type="text"/>
    </div>
  )
}*/

const FRInput = React.forwardRef( (props, ref) => {
  return (
    <div>
      <input ref={ref} type="text"/>
    </div>
  )
});

export default FRInput;
