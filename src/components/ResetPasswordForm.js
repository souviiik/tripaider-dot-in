import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { MdError, MdInfo } from "react-icons/md";
import ReactTooltip from 'react-tooltip'

const validate = values => {
  const errors = {}  

  if (!values.newpass) {
    errors.newpass = 'Please enter a password'
  } else if (!/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,30}$/i.test(values.newpass)) {
    errors.newpass = 'Your password does not meet password requirement.'
  }

  if (values.retypenewpass !== values.newpass) {
    errors.retypenewpass = 'Passwords does not match!'
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

let ResetPasswordForm = props => {
  const { handleSubmit, submitting, invalid, errorMessage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <small className="text-info">All fields are mandatory</small>
      <Field
        type="password"
        component={renderField}
        name="newpass"
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
        Reset password
      </button>
    </form>
  );
};

ResetPasswordForm = reduxForm({
  // a unique name for the form
  form: "resetpassword",
  validate
})(ResetPasswordForm);

export default ResetPasswordForm;
