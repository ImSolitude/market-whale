import React from "react";
import PropTypes from "prop-types";
import "./Login.css";

class Login extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <p>Sign in to access your inventory!</p>
        <button
          className="github"
          onClick={() => this.props.authenticate("Github")}
        >
          Login in with Github
        </button>
        <button
          className="facebook"
          onClick={() => this.props.authenticate("Facebook")}
        >
          Login in with Facebook
        </button>
      </div>
    );
  }
}

export default Login;
