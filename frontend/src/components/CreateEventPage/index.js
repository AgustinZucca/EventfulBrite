import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const CreateEventFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categories = useSelector((state) => state.events.categories);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(eventActions.fetchCategories());
  }, [dispatch]);

  if (!sessionUser) {
    alert("Please Login to create an event");
    return <Redirect to="/login" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newEvent = {
      hostId: sessionUser.id,
      categoryId: category,
      name: name,
      date: date,
      description: description,
      location: location,
      capacity: capacity,
    };

    const reset = () => {
      setName("");
      setDate("");
      setDescription("");
      setCapacity(0);
      setCategory(categories[0]);
      setLocation("");
      setErrors([]);
    };

    const event = await dispatch(eventActions.createEvent(newEvent));
    if (event) return reset();
  };

  return (
    <div className="createEventPage">
      <form className="createEventForm" onSubmit={handleSubmit}>
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
        <div className="eventDescriptionInput">
          <label>Event description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></input>
        </div>
        <div className="dateInput">
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          ></input>
        </div>
        <div className="categorySelection">
          <label>Category</label>
          <select 
            onChange={e => setCategory(e.target.value)}
            value={category}>
            {categories.map(({id, name}) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </div>
        <div className="locationInput">
          <label>Location</label>
          <input
            type="address"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            required
          ></input>
        </div>
        <div className="passInput">
          <label>Capacity</label>
          <input
            type="numeric"
            onChange={(e) => setCapacity(e.target.value)}
            value={capacity}
            required
          ></input>
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventFormPage;
