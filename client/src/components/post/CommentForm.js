import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CommentForm = ({ postId, addComment }) => (
  <div class="post-form">
    <div class="bg-primary p">
      <h3>Leave a Comment</h3>
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
        addComment(postId, { text: values.text });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form my-1">
          <Field name="text" component="textarea" />
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
