import React, {useState} from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
function Login(props) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,handleError] = useState("");
    let login = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "password"){
            props.setUser(true)
        }
        else{
            handleError("Wrong username or password")
        }

    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <LoginForm onSubmit={(e) => login(e)} setUsername={setUsername} setPassword={setPassword} error={error}/>
            </div>
        </div>
    );
}

export default Login;
