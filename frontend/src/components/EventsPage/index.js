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
          <h1 className="browseTitle">Browse Events</h1>
          <div className="eventsDisplay">
            {events.slice(0).reverse().map(({ id, name, date, location, img }) => (
              <div className={`eventSquare`}>
                <img
                  style={{ width: 250 }}
                  onClick={handleClick}
                  className='squareImg'
                  id={`${id}`} src={img}></img>
                <div className="eventSquareInfo">
                  <h3 onClick={handleClick}>{name}</h3>
                  <p className="date">{date.slice(0, 10)}</p>
                  <p>{`${location.slice(0,40)}...`}</p>
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
