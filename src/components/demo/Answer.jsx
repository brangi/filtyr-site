import React from 'react';
import PropTypes from 'prop-types';

const Answer = (props) => {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerId === props.answerSelected} //for now
        id={props.answerId}
        value={props.answerId}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerId}>
        {props.answer}
      </label>
    </li>
  );
};

Answer.propTypes = {
  questionId: PropTypes.string, // Just in case for now
  answerId: PropTypes.string,
  answerType: PropTypes.string,
  answerSelected: PropTypes.string,
  answer: PropTypes.string,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Answer;
