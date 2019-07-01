import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { MdError, MdInfo } from "react-icons/md";
import ReactTooltip from 'react-tooltip'

const validate = values => {
  const errors = {}
  
  if (!values.username) {
    errors.username = 'Please enter your registered email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Please enter a valid email address'
  }

  if (!values.password) {
    errors.password = 'Please enter your password'
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
    <div>A basic password requires at least 
      <ul className="mt-2">
        <li>1 lower case,</li><li>1 upper case,</li><li>1 numeric,</li><li>1 non-word and</li><li>no whitespace</li></ul></div>
    </ReactTooltip></Fragment>}
    {touched && (error && <small className="text-danger ml-2"><MdError /> {error}</small>)}
    <input {...input} placeholder={label} type={type} className="form-control" />
  </div>
)

let ChangeCurrentPasswordForm = props => {
  const { handleSubmit, submitting, invalid, errorMessage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <small className="text-info">All fields are mandatory</small>
      <Field
        type="password"
        component={renderField}
        name="old_password"
        label="Current password"
      />
      <Field
        type="password"
        component={renderField}
        name="new_password"
        label="New password"
        tooltip={true}
      />
      <Field
        type="password"
        component={renderField}
        name="retypenewpass"
        label="Retype new password"
      />
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary mb-3" disabled={submitting || invalid}>
        Save password
      </button>
    </form>
  );
};

ChangeCurrentPasswordForm = reduxForm({
  // a unique name for the form
  form: "changepassword",
  validate
})(ChangeCurrentPasswordForm);

export default ChangeCurrentPasswordForm;
