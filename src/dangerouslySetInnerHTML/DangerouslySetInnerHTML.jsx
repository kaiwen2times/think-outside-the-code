import React, { useState } from 'react';
import './dangerouslySetInnerHTML.css'

const DangerouslySetInnerHTML = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="editor-container">
      <div className="editor-section">
        <div className="editor-label">Editor</div>
        <textarea
          className="textarea"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="preview-section">
        <div className="preview-label">Preview</div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: input }}
        />
      </div>
    </div>
  );
};

export default DangerouslySetInnerHTML;
