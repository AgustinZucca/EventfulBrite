import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SignUpForm.css'

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ username, email, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(["Confirm Password field must match Password"]);
  };

  return (
    <div className="signupPage">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="usernameInput">
          <label>Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          ></input>
        </div>
        <div className="emailInput">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
        <div className="passInput">
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          ></input>
        </div>
        <button type="submit" className="registerBtn">Register</button>
      </form>
    </div>
  );
};

export default SignupFormPage;
