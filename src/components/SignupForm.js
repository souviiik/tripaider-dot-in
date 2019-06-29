import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { MdError, MdInfo } from "react-icons/md";
import ReactTooltip from 'react-tooltip'

const validate = values => {
  const errors = {}
  
  if(!values.firstname) {
    errors.firstname = 'Please enter your first name'
  } else if (values.firstname.length < 2) {
    errors.firstname = 'Your first name must be 2 characters or more'
  }
  
  if(!values.lastname) {
    errors.lastname = 'Please enter your last name'
  } else if (values.lastname.length < 2) {
    errors.lastname = 'Your last name must be 2 characters or more'
  }
  
  if (!values.username) {
    errors.username = 'Please enter your personal email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Please enter a valid email address'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  } else if (!/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/i.test(values.password)) {
    errors.password = 'Your password does not meet password requirement.'
  }

  if (values.password !== values.retypepass) {
    errors.retypepass = 'Passwords does not match!'
  }
  
  return errors
}

const renderField = ({
  input,
  label,
  type,
  tooltip,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}:</label> {tooltip && <Fragment><a data-tip="React-tooltip"><MdInfo /></a>
    <ReactTooltip place="top" type="dark" effect="float">
    <p>The basic password requires at least 
      <ul className="mt-2">
        <li>1 lower case,</li><li>1 upper case,</li><li>1 numeric,</li><li>1 non-word and</li><li>no whitespace</li></ul></p>
    </ReactTooltip></Fragment>}
    {touched && (error && <small className="text-danger ml-2"><MdError /> {error}</small>)}
    <input {...input} placeholder={label} type={type} className="form-control" />
  </div>
)

let SignupForm = props => {
  const { handleSubmit, submitting, invalid, errorMessage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <small className="text-info">All fields are mandatory</small>
      <div className="row">
        <div className="col-md-6">
            <Field
              type="text"
              component={renderField}
              name="firstname"
              label="First name"
            />
        </div>
        <div className="col-md-6">
        <Field
              type="text"
              component={renderField}
              name="lastname"
              label="Last name"
            />
        </div>
      </div>

      <Field
        type="email"
        component={renderField}
        name="username"
        label="Email address"
      />
      <Field
        type="password"
        component={renderField}
        name="password"
        label="Password"
        tooltip={true}
      />
      <Field
        type="password"
        component={renderField}
        name="retypepass"
        label="Retype password"
      />
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary my-3" disabled={submitting || invalid}>
        Join tripaider
      </button>
    </form>
  );
};

SignupForm = reduxForm({
  // a unique name for the form
  form: "signup",
  validate
})(SignupForm);

export default SignupForm;
