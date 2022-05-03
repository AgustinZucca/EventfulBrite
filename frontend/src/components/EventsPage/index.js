import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./EventsPage.css";

const EventsPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const events = useSelector((state) => state.events.events);
  console.log("EVENTS PAGE", events);

  useEffect(() => {
    dispatch(eventActions.fetchEvents());
  }, [dispatch]);

  if (!sessionUser) {
    alert("Please Login to create an event");
    return <Redirect to="/login" />;
  }

  const handleClick = (e) => {
    console.log(e.target.className)
  };

  return (
    <div className="eventsPage">
      <h2 className="browseTitle">Browse Events</h2>
      <div className="eventsDisplay">
        {events.map(({ id, name, date, location }) => (
          <div onClick={handleClick} className={`eventSquare ${id}`} value={name}>
            <img
              style={{ width: 250 }}
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"
            ></img>
            <div className="eventSquareInfo">
              <h2>{name}</h2>
              <h3>{date.slice(0, 10)}</h3>
              <p>{location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
