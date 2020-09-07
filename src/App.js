import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '', password: '', error: '', token: localStorage.getItem('admin_authourized_token') };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleLogout(event) {
        if (localStorage.getItem('admin_authourized_token')) {
            localStorage.removeItem('admin_authourized_token')
            this.setState({ token: false })
            this.setState({ username: "" });
            this.setState({ password: "" });
            this.setState({ error: '' })
        }
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {

        if (this.state.username === 'admin' && this.state.password === 'password') {
            localStorage.setItem('admin_authourized_token', 'token')
            this.setState({ token: 'token' });
        } else {
            this.setState({ error: 'Username or password is incorrect' });
            this.setState({ token: false })
            this.setState({ username: "" });
            this.setState({ password: "" });
        }
        event.preventDefault();
    }

    render() {

        let errorMessage;
        let loggedOut;
        if (this.state.error) {
            errorMessage = <div className="error">{this.state.error}</div>;
        }

        if (!this.state.token) {
            loggedOut = <form onSubmit={this.handleSubmit} className='form'>

                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>
                {errorMessage}
                <button type="submit">Войти</button>
            </form>
        } else {
            loggedOut = <button type="button" onClick={this.handleLogout}>Выйти</button>
        }

        return (
            <div className="form-container">

                {loggedOut}
            </div>
        );
    }
}

export default App;
