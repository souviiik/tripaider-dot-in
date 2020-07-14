import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from 'moment';

import requireAuth from "../requireAuth";

class Profile extends Component {
  render() {
    const { firstname, lastname, created } = this.props.user;
    return (
      <div className="container py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Profile | tripaider.in</title>
        </Helmet>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  alt="profile"
                  className="img-fluid img-thumbnail"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MlDZeVgUPv4QvLatoQCoUFgqt1HUmSpMY0hHeJN2Y3J6hP2eNw"
                />
                <h5 className="mt-4">{firstname} {lastname}</h5>
                <p>India / {moment().local().format('H:mm a')}</p>
                <p>Member since {moment(created).format("MMMM D, YYYY")}</p>
                <p>0 Recomendations</p>
              </div>
              <div className="col-md-8">
                <h4>About me</h4>
                <p>
                  Sed condimentum elit scelerisque enim malesuada scelerisque.
                  Cras vel nunc ut eros rutrum efficitur. Nam ullamcorper orci
                  sit amet mollis blandit. Nulla facilisi. Fusce vehicula nec
                  elit quis egestas. Integer ullamcorper fringilla nisi et
                  finibus. Maecenas nisi ex, consequat sit amet urna sed,
                  fringilla lacinia libero. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Nunc id turpis et est accumsan porta. Vivamus tempus nulla
                  mattis metus mollis, et viverra dolor aliquam. Nulla iaculis
                  fermentum nisl, a consequat mauris molestie et. Vestibulum
                  maximus urna sit amet lectus dictum, ut cursus ipsum ornare.
                  Ut posuere, erat at faucibus sodales, neque est aliquam arcu,
                  non rhoncus ante velit non nunc. Curabitur posuere viverra
                  augue pulvinar posuere. Sed maximus tempus libero, sit amet
                  fermentum lacus imperdiet eget.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Link className="btn btn-primary btn-block" to="/">
              Edit profile
            </Link>
            <hr />
            <p>Total earnings:</p>
            <p>Reviews</p>
            <hr />
            <ul>
              <li>Completed: </li>
              <li>On budget: </li>
              <li>Repeat hire rate: </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <h5>Recent reviews</h5>
          </div>
          <div className="col-md-4">
            <div className="border border-dark p-3 mb-3">
              <h5>Certifications</h5>
            </div>
            <div className="border border-dark p-3 mb-3">
              <h5>Verifications</h5>
            </div>
            <div className="border border-dark p-3 mb-3">
              <h5>Browse similar freelancers</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(requireAuth(Profile));
