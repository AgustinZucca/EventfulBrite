import { csrfFetch } from "./csrf";

export const LOGIN_USER = "session/login";
export const LOGOUT_USER = "session/logout";

export const login = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const loginUser = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const user = await res.json();
    dispatch(login(user));
  }
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const res = await csrfFetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await res.json();
  dispatch(login(data.user));
  return res;
};

export const logoutUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(logout());
  return res;
};

export const restoreUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session");
  if (res.ok) {
    const { user } = await res.json();
    dispatch(login(user));
    return res;
  }
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOGIN_USER:
      newState = { ...state, user: action.user };
      return newState;
    case LOGOUT_USER:
      newState = { ...state, user: null };
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
