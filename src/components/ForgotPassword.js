import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { Helmet } from "react-helmet";

export default class ForgotPassword extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log("values:", values);
  };
  render() {
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reset your password | tripaider.in</title>
        </Helmet>
        <h2 className="text-center mb-5">Reset your password</h2>
        <ForgotPasswordForm onSubmit={this.submit} />
        <hr />
        <p>
          Don't have an account? <Link to="signup">Sign Up</Link>
        </p>
      </div>
    );
  }
}
