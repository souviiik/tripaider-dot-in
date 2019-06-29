import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";

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
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}:</label>
    {touched && (error && <small className="text-danger ml-2"><MdError /> {error}</small>)}
    <input {...input} placeholder={label} type={type} className="form-control" />
  </div>
)

let LoginForm = props => {
  const { handleSubmit, submitting, invalid, errorMessage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <small className="text-info">All fields are mandatory</small>
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
      <p>
        <Link to="forgot-password">Forgot password?</Link>
      </p>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <button type="submit" className="btn btn-primary mb-3" disabled={submitting || invalid}>
        Login
      </button>
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: "signup",
  validate
})(LoginForm);

export default LoginForm;
