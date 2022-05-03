import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "./EventsPage.css";

const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(eventActions.fetchEvents());
  }, [dispatch]);

  const handleClick = (e) => {
    console.log(e.target.id);
  };

  return (
    <div className="eventsPage">
      <h2 className="browseTitle">Browse Events</h2>
      <div className="eventsDisplay">
        {events.map(({ id, name, date, location }) => (
          <NavLink
            to={`/events/${id}`}
            style={{
              textDecoration: "none",
              textDecorationColor: "none",
              color: 'black'
            }}
          >
            <div className={`eventSquare`}>
              <img
                style={{ width: 250 }}
                src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"
              ></img>
              <div className="eventSquareInfo">
                <h2>{name}</h2>
                <h3 className="date">{date.slice(0, 10)}</h3>
                <p>{location}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
