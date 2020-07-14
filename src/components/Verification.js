import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

import * as actions from "../actions";

class Verification extends Component {
    componentDidMount() {
        const email = this.props.match.params.email;
        this.props.accountVerification(email, () => {
            this.props.history.push("/login");
        });
    }

    render() {
        const { errorMessage } = this.props;

        return ( 
            <div className="container py-5">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Account activation | tripaider.in</title>
                </Helmet>
                <h2 className="text-center mb-5">Account activation</h2>
                {errorMessage && <div className="text-danger">{errorMessage}</div>}
                {!errorMessage && <p>Wait while we validate your account...</p>}
            </div>
         );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
  }
 
export default connect(mapStateToProps, actions)(Verification);