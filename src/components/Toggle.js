import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false); // Step 1: Initialize state

  const toggleSwitch = () => {
    setIsOn(!isOn); // Step 2: Update state to the opposite value
  };

  return (
    <div>
      <h2>The switch is {isOn ? "ON" : "OFF"}</h2> {/* Step 3: Display state */}
      <button onClick={toggleSwitch}>Toggle</button> {/* Step 4: Button to toggle */}
    </div>
  );
}

export default Toggle;
