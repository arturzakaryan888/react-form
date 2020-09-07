import React from "react";
import "./login-form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm(props) {
 
  return (
    <form className="login-form" onSubmit={props.onSubmit}>

      
      <Input label="Username"  setForm={props.setUsername} error={props.error}/>
      <Input type="password" label="Password" setForm={props.setPassword} error={props.error}/>
        <div className="error">{props.error ? props.error : ""}</div>
      <Button type="submit" class="primary" text="Войти" />
    </form>
  );
}

export default LoginForm;
