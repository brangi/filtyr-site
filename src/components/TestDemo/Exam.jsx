import React, { Component } from "react";
import { scrollTo } from "../../Utils";
import Base from "./Base";
import TopBar from '../sections/TopBar1';

class Exam extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo('root');
  }
  render() {
    return (
      <div className="landing">
        <TopBar mode={'test'} />
        <Base />
      </div>
    );
  }
}

export default Exam;
