import React, { useState,useEffect } from "react";
import Login from "./views/Login/Login";
import "./App.css";
import Button from "./components/Button/Button";
function App() {
    const [user,setUser] = useState(false || localStorage.getItem("admin_authorized_token"));
    useEffect(() => {
        if(user){
            localStorage.setItem("admin_authorized_token",'token')
            loggedInUser();
        }
    },[user])
    let logout = () => {
        if(localStorage.getItem("admin_authorized_token")){
            localStorage.removeItem("admin_authorized_token")
            setUser(false)
        }
    }
    let loggedInUser = () => {
        if(user){
            return (
                <div>
                    <Button onClick={logout}  type="button"  text="Выйти"/>
                </div>

            );
        }else{
            return <Login setUser={setUser}/>
        }
    }
    return (
            <div className="main-container">
                {loggedInUser()}
            </div>
    );
}

export default App;
