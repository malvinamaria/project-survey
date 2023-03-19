import React, { useState } from 'react';
import { Afterparty } from 'componenets/Afterparty';
import { Email } from 'componenets/Email';
import { Name } from 'componenets/Name';
import { Results } from 'componenets/Results';
import { Landingpage } from 'componenets/Landingpage';
import { Allergy } from 'componenets/Allergy';
import { Question } from 'componenets/Question';

export const App = () => {
  const [step, setStep] = useState(1);
  const [landingpage, setLandingpage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [afterparty, setAfterparty] = useState('');
  const [allergy, setAllergy] = useState('');
  const [question, setQuestion] = useState('');

  const handleStepIncreasse = () => {
    setStep(step + 1);
  };
  console.log(landingpage);
  console.log(setLandingpage);
  console.log(setAllergy);
  return (
    <div className="container-main">
      {step === 1 && (
        <Landingpage
          landingpage={landingpage}
          setLandingpage={setLandingpage}
          // eslint-disable-next-line react/jsx-closing-bracket-location
        />
      )}
      {step === 2 && <Name name={name} setName={setName} />}
      {step === 3 && <Email email={email} setEmail={setEmail} />}
      {step === 4 && (
        <Afterparty afterparty={afterparty} setAfterparty={setAfterparty} />
      )}
      {step === 5 && <Allergy allergy={allergy} setAllergy={setAllergy} />}
      {step === 6 && <Question question={question} setQuestion={setQuestion} />}
      {step >= 7 && (
        <Results name={name} email={email} afterparty={afterparty} />
      )}
      {step < 7 && (
        <>
          {/* <p> Current state: {step} </p> */}
          <div className="next-step">
            <button type="button" onClick={handleStepIncreasse}>
              Next step
            </button>
          </div>
        </>
      )}
    </div>
  );
};
