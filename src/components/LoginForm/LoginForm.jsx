import React from "react";
import "./login-form.css";
function LoginForm(props) {
  let handlePasswordChange = (e) => {
    props.setPassword(e.target.value)
  }
  let handleUsernameChange = (e) => {
    props.setUsername(e.target.value)
  }
  return (
    <form className="login-form" onSubmit={props.onSubmit}>
      <div className="input-container">
        <label className="label">Username</label>
        <input className="input" type="text" onChange={(e) => handleUsernameChange(e)} />
      </div>
      <div className="input-container">
        <label className="label">Password</label>
        <input className="input" type="password" onChange={(e) => handlePasswordChange(e)} />
      </div>
      <div className="error">{props.error ? props.error : ""}</div>
      <button type="submit" className={"btn"}>Войти</button>
    </form>
  );
}

export default LoginForm;
