import React, { useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../components/form/Input";
import InputWithIcon from "../../components/form/InputWithIcon";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <Formik
        initialValues={{ ...formData }}
        validate={values => {
          const errors = {};
          if (!values.status) {
            errors.status = "Required";
          }
          if (!values.skills) {
            errors.skills = "Required";
          }
          return errors;
        }}
        onSubmit={values => {
          createProfile(values, history);
        }}
      >
        {() => (
          <Form className="form">
            <div className="form-group">
              <Field name="status" as="select">
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
              </Field>
              <small className="form-text">
                Give us an idea of where you are at in your career
              </small>
              <ErrorMessage name="status" component="div" />
            </div>
            <Input
              name="company"
              placeholder="Company"
              caption="Could be your own company or one you work for"
            />
            <Input
              name="website"
              placeholder="Website"
              caption="Could be your own or a company website"
            />
            <Input
              name="location"
              placeholder="Location"
              caption="City & state suggested (eg. Boston, MA)"
            />
            <Input
              name="skills"
              placeholder="Skills"
              caption="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP"
            />
            <Input
              name="githubusername"
              placeholder="Github username"
              caption=" If you want your latest repos and a Github link, include your
              username"
            />
            <Input
              type="textarea"
              name="bio"
              placeholder="A short bio of yourself"
              caption="Tell us a little about yourself"
            />

            <div className="my-2">
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type="button"
                className="btn btn-light"
              >
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>

            {displaySocialInputs && (
              <Fragment>
                <InputWithIcon
                  name="facebook"
                  placeholder="Facebook URL"
                  icon="facebook"
                />
                <InputWithIcon
                  name="twitter"
                  placeholder="Twitter URL"
                  icon="twitter"
                />
                <InputWithIcon
                  name="youtube"
                  placeholder="YouTube URL"
                  icon="youtube"
                />
                <InputWithIcon
                  name="linkedin"
                  placeholder="Linkedin URL"
                  icon="linkedin"
                />
                <InputWithIcon
                  name="instagram"
                  placeholder="Instagram URL"
                  icon="instagram"
                />
              </Fragment>
            )}

            <input type="submit" className="btn btn-primary my-1" />
            <Link className="btn btn-light my-1" to="/dashboard">
              Go Back
            </Link>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
