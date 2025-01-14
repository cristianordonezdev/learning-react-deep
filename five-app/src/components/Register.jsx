import { useState } from "react"

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [stateForm, setStateForm] = useState({
    email: false,
    password: false
  })

  const emailIsValid = stateForm.email && !form.email.includes("@")
  const passwordIsValid = stateForm.password && form.password.length < 4;


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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
            onChange={(event) => handleOnChangeForm("email", event.target.value)} value={form.email}
            onBlur={(event) => handleOnBlurForm("email", event.target.value)}
          />
          {emailIsValid && <span className="control-error">Please enter a valid email</span>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
            onChange={(event) => handleOnChangeForm("password", event.target.value)}
            onBlur={(event) => handleOnBlurForm("password", event.target.value)}
            value={form.password}
          />
          {passwordIsValid && <span className="control-error">Please enter a strong password</span>}

        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
