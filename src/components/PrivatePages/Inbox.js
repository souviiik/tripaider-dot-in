import React, { Component } from "react";
import { Helmet } from "react-helmet";

import requireAuth from "../requireAuth";

class Inbox extends Component {
  render() {
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Inbox | tripaider.in</title>
        </Helmet>
        <h2>Inbox</h2>
        <p>List of mails</p>
      </div>
    );
  }
}

export default requireAuth(Inbox);
