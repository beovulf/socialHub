import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const Input = ({ icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group social-input">
      <i className={`fab fa-${icon} fa-2x`}></i>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Input;
