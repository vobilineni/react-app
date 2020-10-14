import React, {useEffect, useState} from 'react';

function UseEffectHook() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('useEffect updated');
    document.title = `You clicked ${count} times`
  }, [count]);
  return (
    <div>
      <input type='text' value={name} onChange={(event) => setName(event.target.value) } />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default UseEffectHook;