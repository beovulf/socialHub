import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const Input = ({ caption, type, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      {type === "textarea" ? (
        <textarea {...field} {...props} />
      ) : type === "checkbox" ? (
        <p>
          <input type={type} {...field} {...props} /> {label && label}
        </p>
      ) : (
        <input type={type} {...field} {...props} />
      )}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      {caption && <small className="form-text">{caption}</small>}
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
