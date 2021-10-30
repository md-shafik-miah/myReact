import React from "react";
import CheckBox from "./CheckBox";
import DatePicker from "./DatePicker";
import FormInput from "./FormInput";
import RadioButton from "./RadioButton";
import Select from "./Select";
import TextArea from "./TextArea";

function FormControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <FormInput {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckBox {...rest}/>
    case "date":
      return <DatePicker {...rest}/>
    default:
      return null;
  }
}

export default FormControl;
