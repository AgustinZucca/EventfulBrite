import { NavLink } from "react-router-dom";
import { logoutUser } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import './Navigation.css'

const Navigation = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const handleClick = () => {
    return dispatch(logoutUser());
  };

  if (!sessionUser) {
    return (
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <div>
            <ProfileButton user={sessionUser}/>
      </div>
    );
  }
};

export default Navigation;
