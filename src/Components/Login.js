import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("fill up the field"),
    password: Yup.string().required("fill up the field"),
  });

  const onSubmit = (values) => {
    console.log("form values", values);
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
            <FormControl /* for email*/
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Type Your Email"
            />
            <FormControl          /* password*/
            control="input"
            type="password"
            label="Password"
            name="password"
            placeholder ="Enter your Password"
          />
          <button type="submit" disabled = {!formik.isValid}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
