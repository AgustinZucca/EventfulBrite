import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./SignUpForm.css";

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const logInFunc = () => {
    history.push("/login");
  };
  if (isLoaded) {
    return (
      <div className="signupPage">
        <div className="signupForm">
          <form className="signupForm" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <ul className="signupErrors">
              {errors?.map((error, idx) => (
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
            <button type="submit" className="registerBtn">
              Register
            </button>
          </form>
          <h3>Have an account?</h3>
          <button className="loginBtn" onClick={logInFunc}>
            Log In
          </button>
        </div>
        <img
          className="loginImg"
          src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
        ></img>
      </div>
    );
  }
};

export default SignupFormPage;
