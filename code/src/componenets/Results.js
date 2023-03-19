import React from 'react';

export const Results = ({ name }) => {
  return (
    <div className="results-container">
      <h2>That is everything {name}!</h2>
      <h3>
        {' '}
        We will send you an{' '}
        <span role="img" className="emoji" aria-label="email emoji">
          📧
        </span>{' '}
        confirmation with some details a few minutes after you submit this form.{' '}
      </h3>
      <h4>We hope you are excited as we are </h4>
    </div>
  );
};
