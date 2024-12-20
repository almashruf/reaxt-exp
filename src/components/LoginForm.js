import React, {useState} from 'react';

function LoginForm() {

    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Welcome, ${username}!`);
    };

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
  );
}


export default LoginForm;
