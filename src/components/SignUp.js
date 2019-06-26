import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import * as actions from '../actions';
import SignupForm from "./SignupForm";

class SignUp extends React.Component {
  submit = values => {
    // print the form values to the console
    this.props.signup(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Signup | tripaider.in</title>
        </Helmet>
        <h2 className="text-center mb-5">Sign up</h2>
        {/* <button className="btn btn-primary my-3">Continue with Google</button>
        <hr /> */}
        <SignupForm onSubmit={this.submit} errorMessage={this.props.errorMessage} />
        <p>
          By registering you confirm that you accept the{" "}
          <Link to="/">Terms and Conditions</Link> and{" "}
          <Link to="/">Privacy Policy</Link>
        </p>
        <hr />
        <p>
          Already have an account? <Link to="login">Log In</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps, actions)(SignUp);