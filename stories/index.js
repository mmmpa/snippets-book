import React from 'react';
import { storiesOf } from '@storybook/react';
import Primer from './components/primer/index.tsx';
import CodeMirrorComponent from './components/code-mirror-component/index.tsx';

storiesOf('Primer', module)
  .add('Catalogue', () => <Primer />)

storiesOf('CodeMirror', module)
  .add('Normal library', () => <CodeMirrorComponent />)
