import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./LoginForm.css";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const demoCredential = "demouser";
  const demoPassword = "password";

  if (sessionUser) return history.push("/events");

  const demoLogin = (e) => {
    return dispatch(sessionActions.loginUser({ demoCredential, demoPassword }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.loginUser({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.message) setErrors(data.message);
      })
  };

  const registerFunc = () => {
    history.push("/signup");
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Log in</h1>
          <ul className="loginErrors">
            {errors?.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="credentialInput">
            <label>Username or Email</label>
            <input
              onChange={(e) => setCredential(e.target.value)}
              value={credential}
              required
            ></input>
          </div>
          <div className="passInput">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            ></input>
          </div>
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>

        <button className="registerBtn" onClick={registerFunc}>
          Register User
        </button>
      </div>
      <img
        className="loginImg"
        src="https://mariposafolk.com/wp-content/uploads/2020/03/2431-MFF_WebBanner_2.2.1FestivalAtAGlance-aspect-ratio-5-6.jpg"
      ></img>
    </div>
  );
};

export default LoginFormPage;
