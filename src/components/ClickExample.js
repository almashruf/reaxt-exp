import React, { useState } from 'react';
function ClickExample() {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value); // Update state with input value
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default ClickExample;
