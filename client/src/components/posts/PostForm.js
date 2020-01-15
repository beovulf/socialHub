import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PostForm = ({ addPost }) => (
  <div class="post-form">
    <div class="bg-primary p">
      <h3>Say Something...</h3>
    </div>
    <Formik
      initialValues={{ text: "" }}
      validate={values => {
        const errors = {};
        if (!values.text) {
          errors.text = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        addPost({ text: values.text });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form my-1">
          <Field name="text" component="textarea" placeholder="Create a post" />
          <ErrorMessage name="text" component="div" />
          <input
            type="submit"
            disabled={isSubmitting}
            class="btn btn-dark my-1"
            value="Submit"
          />
        </Form>
      )}
    </Formik>
  </div>
);

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
