import React from "react";
import { Formik, Form } from "formik";    // installed react-formik package
import * as Yup from "yup";
import FormControl from "./FormControl";

function AddmitionForm() {
  const options = [
    /* select option */ { key: "select a topic", value: "" },
    { key: "shafik", value: "shafik" },
    { key: "Momin", value: "Momin" },
    { key: "Sujon", value: "Sujon" },
  ];

  const checkOptions = [
    { key: "HTML", value: "tea1" },
    { key: "CSS", value: "milk2" },
    { key: "Javascript", value: "coffee3" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    courseSelect: "",
    skillSelect: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    bio: Yup.string().required("Text about yourself"),
    courseSelect: Yup.string().required("Select a topic"),
    skillSelect: Yup.array().required("Thick your Skill"),
    courseDate: Yup.date().required("Date Please").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Addmition Data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your Email"
            />

            <FormControl
              control="textarea"
              as="textarea"
              label="Bio Data"
              name="bio"
              placeholder="Text About Yourself"
            />

            <FormControl
              control="select"
              label="Select Course"
              name="courseSelect"
              options={options}
            />

            <FormControl /* for checkbox */
              control="checkbox"
              label="thick a Topic"
              name="skillSelect"
              checkOptions={checkOptions}
            />
            <FormControl /* for date select */
              control="date"
              label="Pick a date "
              name="courseDate"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default AddmitionForm;
