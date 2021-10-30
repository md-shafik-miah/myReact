import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

function FormContainer() {
  const options = [       /* select option */
    {key: "select a topic", value:''},
    {key: "shafik", value:'shafik'},
    {key: "Momin", value:'Momin'},
    {key: "Sujon", value:'Sujon'},
  ]
  const radioButton = [
    {key: "shafik", value:'shafik1'},
    {key: "Momin", value:'Momin2'},
    {key: "Sujon", value:'Sujon3'},
  ]
  const checkOptions = [
    {key: "Tea", value:'tea1'},
    {key: "Milk", value:'milk2'},
    {key: "Coffee", value:'coffee3'},
  ]

  const initialValues = {
    name: '',
    email: '',
    description: '',
    selectOption: '',
    radioButtonSelect: '',
    checkOptionSelect: [],
    birthDay: null
    
  };
  const validationScama = Yup.object({
    name: Yup.string().required("Input your Name"),
    email: Yup.string().required("Input valid Email"),
    description: Yup.string().required("Input your text"),
    selectOption: Yup.string().required("Select an option"),
    radioButtonSelect: Yup.string().required("Check a topic"),
    checkOptionSelect: Yup.array().required("thick a topic"),
    birthDay: Yup.date().required('pick a date').nullable()
  });
  const onSubmit = (values) => {
    console.log("form values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScama}
      onSubmit={onSubmit}
    >
      {
        <Form>
          <FormControl       /* for name */
            control="input"
            type="text"
            label="Name"
            name="name"
            placeholder ="Type Your Name"
          />
          <FormControl          /* for email*/
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder ="Type Your Email"
          />
          <FormControl      /* for textarea */
            control="textarea"
            as ="textarea"
            label="Description"
            name="description"
            placeholder ="Type your text"
          />
          <FormControl     /* for select option */
            control="select"
            label="Select a Topic"
            name="selectOption"
            options={options}
          />
          <FormControl       /* for radio button option */
            control="radio"
            label="Select a Topic"
            name="radioButtonSelect"
            radioButtons={radioButton}
          />
          <FormControl              /* for checkbox */
            control="checkbox"
            label="thick a Topic"
            name="checkOptionSelect"
            checkOptions={checkOptions}
          />
          <FormControl         /* for date select */
            control="date"
            label="Pick a date "
            name="birthDay"
            
          />
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </Form>
      }
    </Formik>
  );
}

export default FormContainer;
