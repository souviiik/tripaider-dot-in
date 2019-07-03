import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "../actions";

import ResetPasswordForm from './ResetPasswordForm';

class ResetPassword extends Component {
    componentDidMount() {
        const hash = this.props.match.params.hash;
        console.log("hash ", hash);
        // this.props.accountVerification(email, () => {
        //     this.props.history.push("/login");
        // });
    }

    submit = formProps => {
      this.props.updatePassword(formProps, () => {
        this.props.logout();  
        this.props.history.push("/login");
      });
    };

    render() {
        return (
            <div className="container py-5">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Reset password | tripaider.in</title>
                </Helmet>
                <h2>Reset password!</h2>
                <ResetPasswordForm onSubmit={this.submit} />
            </div>
        )
    }
}



function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default connect(
    mapStateToProps,
    actions
)(ResetPassword);
