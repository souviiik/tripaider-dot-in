import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = props => (
  <div>
    <ReCAPTCHA
      sitekey="6Le1bKoUAAAAAEhvDOXqeVIG8_9ok6znOCq9KtKO"
      onChange={props.input.onChange}
    />
  </div>
);

export default Captcha;
