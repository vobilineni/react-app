import React from 'react';

function Hero({name}) {
  if(name === 'joker'){
    throw new Error('Not a hero')
  }
  return (
    <div>{name}</div>
  )
}

export default Hero;
