import { useState } from "react"

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello world", form)
  }
 
  function handleOnChangeForm(id, value) {
    setForm((old_values) => ({...old_values, [id]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleOnChangeForm("email", event.target.value)} value={form.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleOnChangeForm("password", event.target.value)} value={form.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
