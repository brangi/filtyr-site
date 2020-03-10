import React from 'react';
import PropTypes from 'prop-types';

const Answer = (props) => {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answer}
        id={props.answerId}
        value={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answer}
      </label>
    </li>
  );
};

Answer.propTypes = {
  answerId: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Answer;
