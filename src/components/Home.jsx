import React, { Component } from "react";
import { scrollTo } from "../Utils";
import Intro1 from "./sections/Intro1";
import TopBar from "./sections/TopBar1";
import Services1 from "./sections/Services1";
import CallToAction1 from "./sections/CallToAction1";
import Pricing1 from "./sections/Pricing1";
import Footer1 from "./sections/Footer1";

class Home extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo('root');
  }

  render() {
    return (
      <div className="landing">
        <TopBar />
        <Intro1 />
        <Services1 />
        <CallToAction1 />
        <Pricing1 />
        <Footer1 />
      </div>
    );
  }
}

export default Home;
