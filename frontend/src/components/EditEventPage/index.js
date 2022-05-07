import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

const EditEventPage = () => {
  const eventId = useParams().id;
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categories = useSelector((state) => state.events.categories);
  const events = useSelector((state) => state.events.events);
  const singleEvent = events.find((event) => event.id === parseInt(eventId));
  const singleCategory = categories.find(
    (category) => category?.id === singleEvent?.categoryId
  );
  const [name, setName] = useState(singleEvent?.name);
  const [date, setDate] = useState(singleEvent?.date.slice(0,16));
  const [description, setDescription] = useState(singleEvent?.description);
  const [category, setCategory] = useState(singleCategory?.id);
  const [img, setImg] = useState(singleEvent?.img);
  const [location, setLocation] = useState(singleEvent?.location);
  const [capacity, setCapacity] = useState(singleEvent?.capacity);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(eventActions.fetchCategories())
      .then(() => dispatch(eventActions.fetchEvents()))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newEvent = {
      ...singleEvent,
      hostId: sessionUser.id,
      categoryId: category,
      name: name,
      date: date,
      img: img,
      description: description,
      location: location,
      capacity: capacity,
    };

    const event = await dispatch(eventActions.updateEvent(newEvent)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (event) {
      history.push(`/events/${event.id}`);
      return;
    }
  };
  if (isLoaded) {
    return (
      <div className="createEventPage">
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
                {singleCategory.name}
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
            <p>{`Previous Date: ${singleEvent.date.slice(0,10)}`}</p>
            <p>{`Previous Time: ${singleEvent.date.slice(11, 16)}`}</p>
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
          <div>
            <button type="submit" className="createBtn">Edit Event</button>
          </div>
        </form>
      </div>
    );
  } else return null;
};

export default EditEventPage;
