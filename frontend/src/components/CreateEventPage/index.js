import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SignUpForm.css'

const CreateEventFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/login" />;

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
    <div className="createEventPage">
      <form className="createEventForm" >
        <h1>Basic Info</h1>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="eventNameInput">
          <label>Event Title</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          ></input>
        </div>
        <div className="categoryInput">
          <label>Category</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
        </div>
        <div className="locationInput">
          <label>Location</label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignupFormPage;
