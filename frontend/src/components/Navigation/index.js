import { NavLink } from "react-router-dom";
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
    return dispatch(sessionActions.loginUser({credential, password})).catch(
      async (res) => {
        const data = await res.json();
      }
    );
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
      <div>
        <ProfileButton user={sessionUser} />
      </div>
    );
  }
};

export default Navigation;
