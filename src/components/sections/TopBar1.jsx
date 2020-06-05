import React, { Component } from "react";
import { debounce, classList } from "../../Utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import ScrollTo from "../common/ScrollTo";
import Fab from '@material-ui/core/Fab';
import { withRouter } from 'react-router-dom';

class TopBar extends Component {
  state = {
    isTop: true,
    isClosed: true
  };
  handleScrollRef;

  componentDidMount() {
    if (window) {
      this.handleScrollRef = this.handleScroll();
      window.addEventListener("scroll", this.handleScrollRef);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("scroll", this.handleScrollRef);
    }
  }

  handleScroll() {
    return debounce(() => {
      if (window) {
        let isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop });
        }
      }
    }, 20);
  }

  close = () => {
    this.setState({ isClosed: true });
  };

  render() {
    let toggleIcon = this.state.isClosed ? "menu" : "close";
    return (
      <section
        className={classList({
          header: true,
          "header-fixed": !this.state.isTop,
          closed: this.state.isClosed
        })}
      >
        { this.props.mode && this.props.mode === 'test' ?
          (
            <div className="container header-container">
              <div className="m-auto" />
              <ul className="navigation">
                <li>
                  Demo
                </li>
              </ul>
            </div>
          )  :
          (
            <div className="container header-container">
              <div className="brand">
                <img src="./assets/images/logo-full.png" alt="" />
              </div>
              <ul className="navigation">
                <li>
                  <ScrollTo to="intro1" onScroll={this.close}>
                    Home
                  </ScrollTo>
                </li>
                <li>
                  <ScrollTo to="service1" onScroll={this.close}>
                    Features
                  </ScrollTo>
                </li>

                <li>
                  <ScrollTo to="pricing1" onScroll={this.close}>
                    Pricing
                  </ScrollTo>
                </li>
              </ul>
              <div className="m-auto" />
              <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="Buy"
                style={{margin: '10px'}}
                onClick={() => {
                  if(process.env.NODE_ENV !== 'development') return;
                  (localStorage.getItem("auth-access"))?
                    this.props.history.push('/dash'):
                  this.props.history.push('/login')
                }}
              >
                LOG IN
              </Fab>
              <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="Buy"
                style={{margin: '10px'}}
                onClick={() => {
                  if(process.env.NODE_ENV !== 'development') return;
                  (localStorage.getItem("auth-access"))?
                    this.props.history.push('/dash'):
                    this.props.history.push('/signup')
                }}
              >
                SIGN UP
              </Fab>
              <IconButton
                className="header__toggle"
                onClick={() => {
                  this.setState({ isClosed: !this.state.isClosed });
                }}
              >
                <Icon>{toggleIcon}</Icon>
              </IconButton>
            </div>
          )
        }
      </section>
    );
  }
}

export default withRouter(TopBar);
