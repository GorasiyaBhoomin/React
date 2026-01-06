import React, { useState } from 'react';

function StringState() {
  const [text, setText] = useState('Hello World');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>String State Example</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter some text"
      />
      <p>Current text: {text}</p>
    </div>
  );
}

export default StringState;