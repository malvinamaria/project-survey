import React from 'react';

export const Email = ({ email, setEmail }) => {
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="email-container">
      <h2>And what is your email address? </h2>
      <h3>We will only use it to send you a confirmation. </h3>
      <div className="style-input">
        <input type="text" value={email} onChange={handleEmailChange} />
      </div>
    </div>
  );
};
