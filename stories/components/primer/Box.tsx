import React from 'react';
import './index.sass';
import classNames from 'classnames';

export const alertType = ['warn', 'error', 'success'] as const;
export type AlertType = typeof alertType[number];

type P = {
  condensed?: boolean
  title?: string
  children?: React.ReactNode
}

export default function Box (props: P) {
  const classes = classNames(
    'Box',
    props.condensed ? 'Box--condensed' : '',
  );

  const BoxHeader = props.title ? (
    <div className='Box-header'>
      <h3 className='Box-title'>
        {props.title}
      </h3>
    </div>
  ) : null;

  return (
    <div className={classes}>
      {BoxHeader}
      <div className='Box-body'>
        Box body
      </div>
      <ul>
        <li className='Box-row'>
          Box row one
        </li>
        <li className='Box-row'>
          Box row two
        </li>
      </ul>
    </div>
  );
}
