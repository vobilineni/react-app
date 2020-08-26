import React from 'react';

function MemoComp() {
  console.log('Memo Component');
  return(
    <div>MemoComp</div>
  )

}

export default React.memo(MemoComp);
