import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChane = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  return (
    <div className="name-container">
      <h1> Great, can we get your full name?</h1>
      <h2> We will print this on your event pass.</h2>
      <div className="style-input">
        <input
          type="text"
          required
          value={name}
          onChange={handleNameChane}
          // value="Type your answer here ..."
          // eslint-disable-next-line react/jsx-closing-bracket-location
        />
      </div>
    </div>
  );
};
