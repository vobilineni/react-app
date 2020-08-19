import React from 'react';
import './myStyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : '';
  return(
    <div>
      <h1 className={`${className} size-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet;