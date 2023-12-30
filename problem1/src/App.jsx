
import React, { useState } from 'react'
import validator from 'validator'
 
const App= () => {
  const[email,setEmail]=useState('')
  const[isValidEmail,setIsValidEmail]=useState('')

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email using validator
    const isValid = validator.isEmail(newEmail);
    setIsValidEmail(isValid);
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '16px',
          border: `1px solid ${isValidEmail ? '#ccc' : '#ff6347'}`,
          borderRadius: '4px',
          outline: 'none',
          transition: 'border-color 0.3s ease-in-out',
        }}
      />
      {!isValidEmail && <p style={{ color: 'red' }}>Invalid email address</p>}
    </div>
  );
};



  


export default App
