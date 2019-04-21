import React, { useState } from 'react';
import './index.sass';
import 'codemirror/lib/codemirror.css';
import { useCodemirror } from './codemirrorHelpers.ts';

export default function CodeMirrorComponent () {
  const [message, setMessage] = useState(`
# 見出し

文章 **strong**

\`\`\`
code block
\`\`\`
`);

  const events = { change: e => setMessage(e.doc.getValue()) };
  const { cm, setView } = useCodemirror({ value: message, events, width: '100%', height: '100%' });

  return (
    <div className='code-mirror_container' onClick={() => cm.focus()}>
      <textarea ref={setView} />
    </div>
  );
}
