import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  //useState() makes function reactive/dynamic (not static)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    //prevent default stops screening from refreshing to make it as fast as possible
    e.preventDefualt();
  };

  const register = (e) => {
    e.preventDefualt();
  };

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

          <input
            type="email"
            //maps email value to the variable below
            value={email}
            //onChange => fires off event 'e'
            //pair function e with arrow function to setEmail which is a function that will set the email
            //e.target.value is what user types in
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </form>

        <button
          //when user hits enter button type = submit makes the user acivate the onclick event on the sign in button
          type="submit"
          onClick={signIn}
          className="signInButton"
        >
          Sign In
        </button>
        <p>
          By continuing, you agree to Wassim's Amazon Fake Clone Conditions of
          Use and Privacy Notice.
        </p>
        <button onClick={register} className="registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
