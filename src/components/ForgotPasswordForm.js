import React from "react";
import { Field, reduxForm } from "redux-form";
import { MdError } from "react-icons/md";

const validate = values => {
  const errors = {}
  
  if (!values.username) {
    errors.username = 'Please enter your registered email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Please enter a valid email address'
  }
  
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}:</label>
    {touched && (error && <small className="text-danger ml-2"><MdError /> {error}</small>)}
    <input {...input} placeholder={label} type={type} className="form-control" />
  </div>
)

let ForgotPasswordForm = props => {
  const { handleSubmit, submitting, invalid } = props;

  return (
    <form onSubmit={handleSubmit}>
      <small className="text-info">All fields are mandatory</small>
      <Field
        type="text"
        component={renderField}
        name="username"
        label="Email address"
      />
      <button type="submit" className="btn btn-primary mb-3" disabled={submitting || invalid}>
        Reset password
      </button>
    </form>
  );
};

ForgotPasswordForm = reduxForm({
  // a unique name for the form
  form: "signup",
  validate
})(ForgotPasswordForm);

export default ForgotPasswordForm;
