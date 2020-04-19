import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { withRouter } from 'react-router-dom';

class Intro1 extends Component {
  state = { };
  render() {
    return (
      <section className="section section-intro1" id="intro1"
      style={{background: 'url(./assets/images/home-bg.jpg) center center/cover no-repeat'}}>
        <div className="container">
          <Grid container spacing={24} justify="center">
            <Grid item md={10}>
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
                  <Icon color="secondary">check</Icon> Relieves students from having to complete duplicative tests for each company.
                </div>
              </div>

              <div>
                <Fab
                  variant="extended"
                  size="large"
                  aria-label="Download"
                  onClick={() => process.env.NODE_ENV ==='development'? this.props.history.push('/demo/5e6aec2475087151616af99f') : null}
                  className="btn-action btn-white m-8"
                >
                 Demo coming soon...
                </Fab>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default withRouter(Intro1);
