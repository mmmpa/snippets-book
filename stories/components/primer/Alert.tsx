import React from 'react';
import './index.sass';
import classNames from 'classnames';

export const alertType = ['warn', 'error', 'success'] as const;
export type AlertType = typeof alertType[number];

type P = {
  type?: AlertType,
  children?: React.ReactNode,
}

export default function Alert (props: P) {
  const classes = classNames(
    'flash',
    props.type ? `flash-${props.type}` : '',
  );

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
