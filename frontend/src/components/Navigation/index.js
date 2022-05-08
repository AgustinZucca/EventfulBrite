import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { useEffect } from "react";

const Navigation = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const credential = "demouser";
  const password = "password";

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
  }, [dispatch])

  const demoLogin = () => {
    return dispatch(sessionActions.loginUser({ credential, password }));
  };

  if (!sessionUser) {
    return (
      <>
        <div className="navbar">
          <NavLink to="/events" style={{textDecoration: 'none'}}>
            <div className="siteLogoNavbar">
              <img src="/images/EventLogo.png"></img>
              <h3>entFulBrite</h3>
            </div>
          </NavLink>
          <div className="userButtons">
            <div className="createEventButton">
              <NavLink className="createEventLink" to="/login">
                <i class="fa-solid fa-address-card"></i>
              </NavLink>
              <NavLink className="createEventLink" to="/login">
                Login
              </NavLink>
            </div>
            <div className="createEventButton">
              <NavLink className="createEventLink" to="/signup">
                <i class="fa-solid fa-user-plus"></i>
              </NavLink>
              <NavLink className="createEventLink" to="/signup">
                Register
              </NavLink>
            </div>
            <div className="demoButton" onClick={demoLogin} to="/signup">
              <p>Demo User</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="navbar">
        <NavLink to="/events" style={{textDecoration: 'none'}}>
            <div className="siteLogoNavbar">
              <img src="/images/EventLogo.png"></img>
              <h3>entFulBrite</h3>
            </div>
          </NavLink>
        <div className="userButtons">
          <div className="createEventButton">
            <NavLink className="createEventLink" to="/events/new">
              <i class="fa-solid fa-plus"></i>
            </NavLink>
            <NavLink className="createEventLink" to="/events/new">
              Create Event
            </NavLink>
          </div>
          <div className="browseEventsButton">
            <NavLink className="browseEventsLink" to="/events">
              <i class="fa-solid fa-list"></i>
            </NavLink>
            <NavLink className="browseEventsLink" to="/events">
              Browse Events
            </NavLink>
          </div>
          <div className="browseTicketsButton">
            <NavLink
              className="browseTicketsLink"
              to={`/tickets/${sessionUser.id}`}
            >
              <i class="fa-solid fa-ticket"></i>
            </NavLink>
            <NavLink
              className="browseTicketsLink"
              to={`/tickets/${sessionUser.id}`}
            >
              Tickets
            </NavLink>
          </div>
          <ProfileButton user={sessionUser} />
        </div>
      </div>
    );
  }
};

export default Navigation;
