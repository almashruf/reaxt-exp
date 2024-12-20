function ClickExample() {
    const handleGreet = (name) => {
        alert(`Hello, ${name}!`);
      };
  
    return (
      <div>
      <button onClick={() => handleGreet("Alice")}>Greet Alice</button>
      <button onClick={() => handleGreet("Bob")}>Greet Bob</button>
      </div>
    );
  }
  
  export default ClickExample;
  