function ClickExample() {
    const handleClick = (event) => {
        console.log("Event:", event); // Logs the event object
        alert(`Button clicked: ${event.target.textContent}`);
      };
  
    return (
      <div>
      <button onClick={handleClick}>Button 10</button>
      <button onClick={handleClick}>Button 2</button>
      </div>
    );
  }

  export default ClickExample;
  