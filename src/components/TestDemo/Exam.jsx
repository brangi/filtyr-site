import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOpt from './AnswerOpt';
import Fab from '@material-ui/core/Fab';

const Exam = props => {
  const renderAnswerOptions = (key) => {
    return (
      <AnswerOpt
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        onNext={props.onNext}
      />
    );
  };

  return (
    <section className="section section-intro1" id="intro1"
             style={{background: 'url(./assets/images/home-bg.jpg) center center/cover no-repeat', color: 'black'}}>
      <CSSTransitionGroup
        className="container-test"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId} >
          <QuestionCount counter={props.questionId} total={props.questionTotal} />
          <Question content={props.question} />
          <ul className="answerOptions">
            {console.log(props.answerOptions)}
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
      </CSSTransitionGroup>
      <div className="next-button">
      <Fab
        variant="extended"
        size="large"
        aria-label="Download"
        onClick={() => props.onNext()}
        className="btn-action btn-white m-28">
        Next
      </Fab>
      </div>
    </section>
  );
};

Exam.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default Exam;

