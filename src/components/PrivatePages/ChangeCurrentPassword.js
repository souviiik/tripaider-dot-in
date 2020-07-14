import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as actions from "../../actions";

import ChangeCurrentPasswordForm from './ChangeCurrentPasswordForm';
import requireAuth from "../requireAuth";

class ChangeCurrentPassword extends Component {
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
                    <title>Profile | tripaider.in</title>
                </Helmet>
                <h2>Change current password!</h2>
                <ChangeCurrentPasswordForm onSubmit={this.submit} />
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
)(requireAuth(ChangeCurrentPassword));
