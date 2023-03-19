import React from 'react';

export const Landingpage = ({ landingpage, setLandingpage }) => {
  const handleLandingChange = (event) => {
    setLandingpage(event.target.value);
    console.log(landingpage);
  };
  return (
    <div className="landing-container">
      {/* <img
        src="../image/technigo.png"
        className="landing-img"
        alt="technigo logo"
        aria-label="technigo image"
        // eslint-disable-next-line react/jsx-closing-bracket-location
      /> */}
      <p>
        Psst...the graduation party is almost here.{' '}
        <span role="img" className="emoji" aria-label="party emoji">
          🥳
        </span>
      </p>
      <p>Would you like to come?</p>
      {/* <button type="button" onClick={handleLandingChange}>
        Count me in!
      </button> */}
      <input
        type="radio"
        value="optionYes"
        name="YESorNO"
        onChange={handleLandingChange}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />{' '}
      YES count me in!
      <input
        type="radio"
        value="optionNo"
        name="YESorNO"
        onChange={handleLandingChange}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />{' '}
      NO{' '}
      <span role="img" className="emoji" aria-label="sob emoji">
        😭
      </span>
    </div>
  );
};
