import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { CSSTransitionGroup } from 'react-transition-group';
import { Flags } from 'react-feature-flags';

const Instruction = (props ) => {
  return (
    <section className="section section-intro1" id="intro1"
             style={{background: 'url(./assets/images/home-bg.jpg) center center/cover no-repeat'}}>
      <CSSTransitionGroup
        className="container-test result scroll-description"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div style={{color: 'black'}}>
          {props.description}
        </div>
      </CSSTransitionGroup>
      <div className="next-button">
        <Fab
          variant="extended"
          size="large"
          aria-label="Download"
          onClick={() => props.initExam()}
          className="btn-action btn-white my-28">
          Start
        </Fab>
      </div>
      <Flags
        exactFlags
        authorizedFlags={['demo']}
        renderOn={() => <h1>visible when flagA AND flagB are active</h1>}
      />
    </section>
  );
};

Instruction.propTypes = {
  description: PropTypes.string.isRequired,
  initExam: PropTypes.func.isRequired
};

export default Instruction;