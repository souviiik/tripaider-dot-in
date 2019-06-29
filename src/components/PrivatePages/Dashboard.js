import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import requireAuth from "../requireAuth";

class Dashboard extends Component {
  render() {
    const { firstname, lastname } = this.props.user;
    console.log("this.props ", this.props);
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard | tripaider.in</title>
        </Helmet>
        <div className="row">
          <div className="col-md-8">
            <div className="border border-dark p-3 mb-3">
              <h2>Recent projects</h2>
              <hr />
              <p>Start bidding now on projects that meet your skills.</p>
              <Link className="btn btn-primary" to="/browse-jobs">
                Browse projects
              </Link>
            </div>
            <div className="border border-dark p-3 mb-3">
              <h2>News feed</h2>
              <hr />
              <p>
                This is where you'll receive updates for projects and account
                activity. Select an option below to get started.
              </p>
              <Link to="/post-project" className="btn btn-outline-primary mr-2">
                Post a project
              </Link>
              <Link className="btn btn-outline-primary" to="/browse-jobs">
                Browse projects
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-dark p-3 mb-3">
              welcome back,
              <h4>{firstname} {lastname}</h4>
              <hr />
              <Link to="/">Complete your account ></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(requireAuth(Dashboard));
