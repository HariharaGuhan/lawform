import React, { useState } from 'react';

export default function First() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name: username, pass_word: password }),
      });

      const data = await response.json();
      console.log(data);
      alert("User created successfully");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
              <label>Password</label>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
