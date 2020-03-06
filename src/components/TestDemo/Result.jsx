import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

const Result = (props ) => {
  return (
    <section className="section section-intro1" id="intro1"
             style={{background: 'url(./assets/images/home-bg.jpg) center center/cover no-repeat'}}>
    <CSSTransitionGroup
      className="container-test result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div style={{color: 'black'}}>
        You prefer <strong>{props.quizResult}</strong>!
      </div>
    </CSSTransitionGroup>
    </section>
  );
};

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;