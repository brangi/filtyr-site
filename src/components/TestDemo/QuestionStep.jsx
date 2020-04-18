import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionCount from './QuestionCount';
import Answer from './Answer';
import Fab from '@material-ui/core/Fab';

const QuestionStep = props => {
  const renderAnswerOptions = (key) => {
    return (
      <Answer
        key={key.id}
        answerType={key.type || undefined}
        answer={key.name}
        answerId={key.id}
        answerSelected={props.answerSelected}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  };
  return (
    <section className="section section-intro1" id="intro1"
             style={{background: 'url(./assets/images/home-bg.jpg) center center/cover no-repeat', color: 'black'}}>
      <div className="container-test">
        <div key={props.questionId} >
          <QuestionCount counter={props.questionNumber} total={props.questionTotal} />
          <Question content={props.question} />
          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
      </div>
      <div className="next-button">
        <Fab
          variant="extended"
          size="large"
          aria-label="Download"
          onClick={() => props.onNext()}
          className="btn-action btn-white my-28">
          Next
        </Fab>
      </div>
    </section>
  );
};

QuestionStep.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  answerSelected: PropTypes.string,
  questionId: PropTypes.string.isRequired,
  questionTotal: PropTypes.number.isRequired,
  questionNumber: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default QuestionStep;

