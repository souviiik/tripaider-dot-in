import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuHidden: true,
      isSubMenuHidden: true
    };
  }

  toggleMenuVisibility = () => {
    this.setState({
      isMenuHidden: !this.state.isMenuHidden
    });
  };

  toggleSubMenuVisibility = () => {
    this.setState({
      isSubMenuHidden: !this.state.isSubMenuHidden
    });
  };

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Fragment>
          <li>
            <NavLink to="/post-project" className="btn btn-primary btn-block">
              Post a project
            </NavLink>
          </li>
          <li className={this.state.isSubMenuHidden ? "nav-item dropdown" : "nav-item dropdown show"}>
            <a onClick={this.toggleSubMenuVisibility} className="nav-link dropdown-toggle ml-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={!this.state.isSubMenuHidden}>
              Welcome Souvik Banerjee!
            </a>
            <div className={this.state.isSubMenuHidden ? "dropdown-menu" : "dropdown-menu show"} aria-labelledby="navbarDropdown">
              <NavLink
                className="dropdown-item"
                to="/dashboard"
                onClick={this.toggleSubMenuVisibility}
              >
                <span className="glyphicon glyphicon-user" /> Dashboard
              </NavLink>
              <NavLink
                className="dropdown-item"
                to="/profile"
                onClick={this.toggleSubMenuVisibility}
              >
                <span className="glyphicon glyphicon-user" /> Profile
              </NavLink>
              <NavLink className="dropdown-item" to="/change-password">Change password</NavLink>
              <div className="dropdown-divider"></div>
              <NavLink
                className="dropdown-item"
                to="/logout"
                onClick={this.toggleSubMenuVisibility}
              >
                <span className="glyphicon glyphicon-log-in" /> Logout
              </NavLink>
            </div>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/signup"
              onClick={this.toggleMenuVisibility}
            >
              <span className="glyphicon glyphicon-user" /> Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/login"
              onClick={this.toggleMenuVisibility}
            >
              <span className="glyphicon glyphicon-log-in" /> Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/post-project" className="btn btn-primary btn-block">
              Post a project
            </NavLink>
          </li>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            tripaider.in
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleMenuVisibility}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={
              this.state.isMenuHidden
                ? "collapse navbar-collapse"
                : "navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/how-it-works"
                  onClick={this.toggleMenuVisibility}
                >
                  How it works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/browse-jobs"
                  onClick={this.toggleMenuVisibility}
                >
                  Browse jobs
                </NavLink>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
