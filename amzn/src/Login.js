import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { login, logout, signup, useAuth } from "./firebase-config";
import "./login.css";

function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);

    await signup(emailRef.current.value, passwordRef.current.value);

    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        ></img>
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input ref={emailRef} placeholder="Email" />
          <h5>Password</h5>
          <input ref={passwordRef} type="password" placeholder="Password" />
        </form>

        <button
          className="registerButton"
          disabled={loading || currentUser}
          onClick={handleSignup}
        >
          Register
        </button>
        <Link to="/">
          <button
            className="signInButton"
            disabled={loading || currentUser}
            onClick={handleLogin}
          >
            Sign In
          </button>
        </Link>
        <button
          className="registerButton"
          disabled={loading || !currentUser}
          onClick={handleLogout}
        >
          Log Out
        </button>
        <p>
          By continuing, you agree to Wassim's Amazon Fake Clone Conditions of
          Use and Privacy Notice.
        </p>
      </div>
      <p> Currently logged in as: {currentUser?.email}</p>
    </div>
  );
}

export default Login;
