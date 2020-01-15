import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import { Formik, Form } from "formik";
import Input from "../form/Input";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  return (
    <Fragment>
      <h1 class="large text-primary">Add An Experience</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <Formik
        initialValues={{ ...formData }}
        enableReinitialize
        onSubmit={values => {
          addExperience(values, history);
        }}
      >
        {values => (
          <Form className="form">
            <Input name="title" placeholder="* Job Title" />
            <Input name="company" placeholder="* Company" />
            <Input name="location" placeholder="Location" />
            <Input type="date" name="from" />
            <Input
              type="checkbox"
              name="current"
              checked={values.current}
              value={values.current}
              label="Current job"
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
              placeholder="Job Description"
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

AddExperience.propTypes = {
  AddExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
