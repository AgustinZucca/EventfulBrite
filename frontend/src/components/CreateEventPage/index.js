import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./CreateEvent.css";

const CreateEventFormPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categories = useSelector((state) => state.events.categories);
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(eventActions.fetchCategories());
  }, []);

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
      img: img,
      location: location,
      capacity: capacity,
    };

    const event = await dispatch(eventActions.createEvent(newEvent)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (event) {
      history.push("/events");
      return;
    }
  };

  return (
    <div className="createEventPage">
      <div className="createEventForm">
        <form className="createEventForm" onSubmit={handleSubmit}>
          <div className="basicInfo">
            <h1>Basic Info</h1>
            <p>
              Name your event and tell event-goers why they should come. Add
              details that highlight what makes it unique.
            </p>
          </div>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="eventNameInput formInput">
            <label className="eventcreatelabel">Event Title</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              placeholder="Be descriptive and clear"
            ></input>
          </div>
          <div className="eventDescriptionInput formInput">
            <label className="eventcreatelabel">Event description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
              placeholder="Tell people what your event is all about!"
            ></textarea>
          </div>
          <div className="categorySelection formInput">
            <label className="eventcreatelabel">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option defaultValue hidden>
                Category
              </option>
              {categories.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="eventDescriptionInput formInput">
            <label className="eventcreatelabel">Event Image</label>
            <input
              onChange={(e) => setImg(e.target.value)}
              value={img}
              required
              placeholder="Enter your event image url here"
            ></input>
          </div>
          <div className="locationInfo">
            <h1>Location</h1>
            <p>
              Help people in the area discover your event and let attendees know
              where to show up.
            </p>
          </div>
          <div className="locationInput formInput">
            <label className="eventcreatelabel">Location</label>
            <input
              type="address"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            ></input>
          </div>
          <div className="dateInfo">
            <h1>Date</h1>
            <p>
              Tell event-goers when your event starts so they can make plans to
              attend.
            </p>
          </div>
          <div className="formInput">
            <label className="eventcreatelabel">Date</label>
            <input
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
              className="dateInput"
            ></input>
          </div>
          <div className="capacityInfo">
            <h1>Capacity</h1>
            <p>How many tickets will be available for this event.</p>
          </div>
          <div className="formInput">
            <label className="eventcreatelabel">Capacity</label>
            <input
              type="numeric"
              onChange={(e) => setCapacity(e.target.value)}
              value={capacity}
              required
            ></input>
          </div>
          <div className="submit">
            <button type="submit" className="createBtn">
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventFormPage;
