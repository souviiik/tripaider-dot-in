import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "../actions";

class Login extends React.Component {  
  submit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login | tripaider.in</title>
        </Helmet>
        <h2 className="text-center mb-5">Login</h2>
        {/* <button className="btn btn-primary my-3">Login with Google</button>
        <hr /> */}
        <LoginForm onSubmit={this.submit} errorMessage={this.props.errorMessage} />
        <p>
          By registering you confirm that you accept the{" "}
          <Link to="/">Terms and Conditions</Link> and{" "}
          <Link to="/">Privacy Policy</Link>
        </p>
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
)(Login);