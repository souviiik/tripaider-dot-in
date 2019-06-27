import React, { Component } from "react";
import { Helmet } from "react-helmet";

import ChangeCurrentPasswordForm from './ChangeCurrentPasswordForm';
import requireAuth from "../requireAuth";

class ChangeCurrentPassword extends Component {
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

export default requireAuth(ChangeCurrentPassword);
