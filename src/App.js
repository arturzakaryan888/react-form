import React, { useState, useEffect } from "react";
import Login from "./views/Login/Login";
function App() {
    const [user, setUser] = useState(false);
    useEffect(() => {
        if (user) {

            loggedInUser();
        }
    }, [user])
    let logout = () => {
        setUser(false)
    }
    let loggedInUser = () => {
        if (user) {
            return (
                <div>
                    <button type="button" className={"btn"} onClick={logout}>Выйти</button>
                </div>

            );
        } else {
            return <Login setUser={setUser} />
        }
    }
    return (
        <div className="main-container">
            {loggedInUser()}
        </div>
    );
}

export default App;
