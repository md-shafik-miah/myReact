import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeofContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Enter email"),
    password: Yup.string().required("Enter password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "password not match")
      .required("Reenter Password"),
    modeofContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeofContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("registation data", values);
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
            />

            <FormControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <FormControl
              control="input"
              type="password"
              label="Confrim Password"
              name="confirmPassword"
            />

            <FormControl
              control="radio"
              label="Mode of Contact"
              name="modeofContact"
              radioButtons = {options}
            />
            <FormControl
              control="input"
              type = "text"
              label="Phone Number"
              name="phone"
            />
            <button type="submit" disabled= {!formik.isValid}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
