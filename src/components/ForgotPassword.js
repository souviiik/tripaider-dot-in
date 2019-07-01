import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "../actions";

class ForgotPassword extends React.Component {
  submit = formProps => {
    this.props.forgotPassword(formProps, () => {
      this.props.history.push("/login");
    });
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(
  mapStateToProps,
  actions
)(ForgotPassword);
