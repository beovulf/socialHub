import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const Input = ({ caption, type, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      {type === "text" ? (
        <input type="text" {...field} {...props} />
      ) : (
        <textarea {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <small className="form-text">{caption}</small>
    </div>
  );
};

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;
