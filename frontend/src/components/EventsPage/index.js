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
            {events.map(({ id, name, date, location }) => (
              <div className={`eventSquare`}>
                <img
                  style={{ width: 250 }}
                  onClick={handleClick}
                  id={`${id}`}
                  src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"
                ></img>
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
