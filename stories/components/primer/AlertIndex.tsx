import React from 'react';
import './index.sass';
import Alert from './Alert.tsx';

export default function AlertIndex () {
  return (
    <div>
      <h1>alert</h1>
      <div className='spacer-block'>
        <Alert>normal alert</Alert>
      </div>
      <div className='spacer-block'>
        <Alert type='warn'>warn alert</Alert>
      </div>
      <div className='spacer-block'>
        <Alert type='error'>error alert</Alert>
      </div>
      <div className='spacer-block'>
        <Alert type='success'>success alert</Alert>
      </div>
    </div>
  );
}
