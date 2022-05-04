import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import "./EventsPage.css";

const EventsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(eventActions.fetchEvents()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const handleClick = (e) => {
    const eventId = e.target.id;
    const path = `/events/${eventId}`;
    history.push(path);
  };

  if (isLoaded) {
    return (
      <>
        <img
          style={{ width: "100%" }}
          src="https://cdn.evbstatic.com/s3-build/fe/build/images/baedf009bb329458ae80eb599fb8a4d5-3_tablet_1067x470.jpg"
        ></img>
        <div className="eventsPage">
          <h2 className="browseTitle">Browse Events</h2>
          <div className="eventsDisplay">
            {events.slice(0).reverse().map(({ id, name, date, location, img }) => (
              <div className={`eventSquare`}>
                <img
                  style={{ width: 250 }}
                  onClick={handleClick}
                  id={`${id}`} src={img}></img>
                <div className="eventSquareInfo">
                  <h2 onClick={handleClick}>{name}</h2>
                  <h3 className="date">{date.slice(0, 10)}</h3>
                  <p>{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default EventsPage;
