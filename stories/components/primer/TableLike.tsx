import React from 'react';
import './index.sass';
import Box from './Box.tsx';

export default function TableLike () {
  return (
    <div>
      <h1>Table like</h1>
      <h2>Box</h2>
      <div className='spacer-block'>
        <Box title='normal' />
      </div>
      <div className='spacer-block'>
        <Box title='condensed' condensed />
      </div>
      <div className='spacer-block'>
        <Box />
      </div>
    </div>
  );
}
