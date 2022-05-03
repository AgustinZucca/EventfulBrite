import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const credential = "demouser";
  const password = "password";

  const handleClick = () => {
    return dispatch(sessionActions.logoutUser());
  };

  const demoLogin = () => {
    return dispatch(sessionActions.loginUser({ credential, password }));
  };

  if (!sessionUser) {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
        <div className="demoButton" onClick={demoLogin} to="/signup">
          Demo User
        </div>
      </>
    );
  } else {
    return (
      <div className="navbar">
        <div className='createEventButton'>
          <i class="fa-solid fa-plus"></i>
          <NavLink className='createEventLink' to='/events/new'>Create Event</NavLink>
        </div>
        <div className='browseEventsButton'>
          <i class="fa-solid fa-list"></i>
          <NavLink className='browseEventsLink' to='/events'>Browse Events</NavLink>
        </div>
        <ProfileButton user={sessionUser} />
      </div>
    );
  }
};

export default Navigation;
