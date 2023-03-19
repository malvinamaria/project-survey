import React from 'react';

export const Afterparty = ({ setAfterparty }) => {
  const handleAfterpartyChange = (event) => {
    setAfterparty(event.target.value);
  };
  return (
    <div className="afterparty-container">
      <h2> Are you planning on staying for the afterparty?</h2>
      <h3> We have a surprise guest lined up...</h3>
      <div className="style-input">
        <input
          type="radio"
          value="optionYes"
          name="YESorNO"
          onChange={handleAfterpartyChange}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        />{' '}
        YES
        <input
          type="radio"
          value="optionNo"
          name="YESorNO"
          onChange={handleAfterpartyChange}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        />{' '}
        NO
      </div>
    </div>
  );
};
