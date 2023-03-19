import React from 'react';

export const Allergy = ({ allergy, setAllergy }) => {
  const handleAllergyChange = (event) => {
    setAllergy(event.target.value);
  };
  return (
    <div className="allergy-container">
      <p className="question">
        And do you have any food allergies we should know about?
      </p>
      <div className="all-selection">
        <select
          className="allergy-selection"
          onChange={handleAllergyChange}
          value={allergy}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        >
          <option disabled value="">
            Select food{' '}
          </option>
          <option
            value="Vegan"
            aria-label="First alternative: Vegan"
            checked={allergy === 'Vegan'}
            onChange={handleAllergyChange}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          >
            Vegan{' '}
            <span role="img" className="emoji" aria-label="sob emoji">
              🌱
            </span>
          </option>
          <option
            value="Vegetarian"
            aria-label="Second alternative: Vegetarian"
            checked={allergy === 'Vegetarian'}
            onChange={handleAllergyChange}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          >
            Vegetarian{' '}
            <span role="img" className="emoji" aria-label="sob emoji">
              🧀
            </span>
          </option>
          <option
            value="Flexetarian"
            aria-label="Third alternative: Flexetarian"
            checked={allergy === 'Flexetarian'}
            onChange={handleAllergyChange}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          >
            Flexetarian{' '}
            <span role="img" className="emoji" aria-label="sob emoji">
              🐟
            </span>
          </option>
        </select>
      </div>
    </div>
  );
};
