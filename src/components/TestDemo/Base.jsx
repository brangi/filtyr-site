import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Base extends Component {
  state = { };
  render() {
    return (
      <section className="section section-intro1" id="intro1"
               style={{background: 'url(./assets/images/home-bg.jpg) center center/cover no-repeat'}}>
        <div className="container">
          <Grid container spacing={24} justify="center">
            <Grid item md={6}>
            </Grid>
            <Grid item md={6} >
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Base;
