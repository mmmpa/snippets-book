import { useEffect, useState } from 'react';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';

type useCodemirrorP = {
  value: string,
  width?: any
  height?: any
  events: { [key: string]: (...args) => void }
};

export function useCodemirror ({ value, events, width, height }: useCodemirrorP) {
  const [view, setView] = useState<HTMLTextAreaElement | null>(null);
  const [cm, setCm] = useState<any | null>(null);

  useEffect(() => {
    if (!view) {
      return;
    }

    const newCm = CodeMirror.fromTextArea(view, {
      lineNumbers: true,
      mode: 'gfm',
      lineWrapping: true,
    });
    newCm.setValue(value);
    newCm.setSize(width || '100%', height || '100%');
    newCm.setValue(value);
    Object.keys(events).forEach(event => newCm.on(event, events[event]));

    setCm(newCm);
  }, [view]);

  useEffect(() => {
    if (cm && !value) {
      cm.getDoc().setValue('');
    }
  }, [value]);

  useEffect(() => {
    if (!cm) {
      return;
    }

    cm.setSize(width, height);
  }, [cm]);

  return { cm, setView };
}
