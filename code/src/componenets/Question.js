/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Question = ({ setQuestion }) => {
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="question-container">
      <label>
        Any questions about the event?
        <div className="text-container">
          <textarea
            name="postContent"
            defaultValue="Write them here and we will get back to you via email."
            rows={18}
            cols={40}
            onChange={handleQuestionChange}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
        </div>
      </label>
    </div>
  );
};
