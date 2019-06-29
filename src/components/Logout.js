import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

import * as actions from "../actions";

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Good bye | tripaider.in</title>
        </Helmet>

        <h2>Sorry to see you go...</h2>
        <p>good bye</p>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Logout);
