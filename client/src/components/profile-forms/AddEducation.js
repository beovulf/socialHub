import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { Formik, Form } from "formik";
import Input from "../form/Input";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const { current } = formData;

  const [toDateDisabled, toggleDisabled] = useState(false);

  return (
    <Fragment>
      <h1 class="large text-primary">Add your Education </h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any school or bootcamp that you
        have attented
      </p>
      <small>* = required field</small>

      <Formik
        initialValues={{ ...formData }}
        enableReinitialize
        onSubmit={values => {
          addEducation(values, history);
        }}
      >
        {values => (
          <Form className="form">
            <Input name="school" placeholder="* School or bootcamp" />
            <Input name="degree" placeholder="* Degree or Certificate" />
            <Input name="fieldofstudy" placeholder="Field of Study" />
            <Input type="date" name="from" />
            <Input
              type="checkbox"
              name="current"
              checked={values.current}
              value={values.current}
              label="Current school"
              onChange={e => {
                toggleDisabled(!toDateDisabled);
              }}
            />
            <Input
              type="date"
              name="to"
              disabled={toDateDisabled ? "disabled" : ""}
            />
            <Input
              type="textarea"
              name="description"
              placeholder="Program Description"
            />
            <input type="submit" class="btn btn-primary my-1" />
            <Link className="btn btn-light my-1" to="/dashboard">
              Go Back
            </Link>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));
