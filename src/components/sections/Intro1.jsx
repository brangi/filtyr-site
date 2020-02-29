import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { NavLink } from 'react-router-dom';

class Intro1 extends Component {
  state = { };
  render() {
    return (
      <section className="section section-intro1" id="intro1"
      style={{background: 'url(./assets/images/home-bg.jpg) center center/cover no-repeat'}}>
        <div className="container">
          <Grid container spacing={24} justify="center">
            <Grid item md={6}>
              <h1 className="section-intro1__title">
                Filtyr - Entry level assessment tests made simple for employers and students.
              </h1>
              <div className="section-intro1__subtitle">
                Filtyr hosts the commonly used entry-level assessment tests, on campus, and links the results to each student's Filtyr profile, allowing employers to readily access the aptitude test scores of their candidates.
              </div>

              <div className="section-intro1__list">
                <div className="section-intro1__list__item">
                  <Icon color="secondary">check</Icon>  This speeds up the recruiting cycle for employers.
                </div>
                <div className="section-intro1__list__item">
                  <Icon color="secondary">check</Icon> Ensures the results are valid as the tests are administered in person.
                </div>
                <div className="section-intro1__list__item">
                  <Icon color="secondary">check</Icon> Relieves students from having to complete duplicative tests for each compan.
                </div>
              </div>

              <div>
                <Fab
                  variant="extended"
                  size="large"
                  color="primary"
                  aria-label="Buy"
                  className="btn-action m-8"
                >
                  <Icon className="mr-16">flight_takeoff</Icon>
                  Hire
                </Fab>

                <Fab
                  variant="extended"
                  size="large"
                  aria-label="Download"
                  className="btn-action btn-white m-8"
                >
                  <Icon className="mr-16">alarm_on</Icon>
                  Demo
                </Fab>
              </div>
            </Grid>
            <Grid item md={6} >
              <div className="section-intro1__product">
                <NavLink to="/" className="section-intro1__product__link">
                  <div className="price">Demo</div>
                  <span className="price__text">Coming soon...</span>
                </NavLink>
                {/*<img src="./assets/images/screenshots/landing-intro.png" alt=""/>*/}
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Intro1;