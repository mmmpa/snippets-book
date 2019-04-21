import React from 'react';
import './index.sass';
import AlertIndex from './AlertIndex.tsx';
import TableLike from './TableLike.tsx';

export default function Primer ({ init = 0, children }) {
  return (
    <div>
      <header>
        <h1>Repository</h1>
        <a href='https://github.com/primer/css'>https://github.com/primer/css</a>
      </header>
      <div className='component-block'>
        <AlertIndex />
      </div>
      <div className='component-block'>
        <TableLike />
      </div>
    </div>
  );
}
