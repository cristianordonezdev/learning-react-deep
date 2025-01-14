import { useState } from "react";
import InputElement from "./InputElement";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [stateForm, setStateForm] = useState({
    email: false,
    password: false
  })

  const emailIsValid = stateForm.email && !isEmail(form.email)
  const passwordIsValid = stateForm.password && !hasMinLength(form.password, 4)


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello world", form)
  }
 
  function handleOnChangeForm(id, value) {
    setForm((old_values) => ({...old_values, [id]: value}))
    setStateForm((old_values) => ({...old_values, [id]: false}))
  }

  function handleOnBlurForm(id, value) {
    setStateForm((old_value) => ({
      ...old_value,
      [id]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register using UseState</h2>

      <div className="control-row">
        <InputElement
          label="Email"
          id="email"
          name="email" 
          onChange={(event) => handleOnChangeForm("email", event.target.value)} 
          value={form.email}
          onBlur={(event) => handleOnBlurForm("email", event.target.value)}
          error={emailIsValid && "Please enter a valid email reused component"}
        ></InputElement>

        <InputElement
          label="Password"
          id="password"
          name="password" 
          onChange={(event) => handleOnChangeForm("password", event.target.value)}
          onBlur={(event) => handleOnBlurForm("password", event.target.value)}
          value={form.password}
          error={passwordIsValid && "The password is not strong"}
        ></InputElement>

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
