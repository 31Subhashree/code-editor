// src/CodeEditor.js
import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Highlight, Prism, themes } from 'prism-react-renderer';
import './CodeEditor.css';

// Ensure Prism is available globally
(typeof global !== "undefined" ? global : window).Prism = Prism;
require('prismjs/components/prism-javascript');

const CodeEditor = () => {
  const [code, setCode] = useState(`function helloWorld() {
  console.log("Hello, world!");
}`);

  return (
    <div className="editor-container">
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code => (
          <Highlight Prism={Prism} theme={themes.dracula} code={code} language="javascript">
            {({ tokens, getLineProps, getTokenProps }) => (
              <pre className="code-highlight">
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        )}
        padding={10}
        className="code-editor"
        textareaClassName="textarea"
        preClassName="pre"
      />
    </div>
  );
};

export default CodeEditor;
