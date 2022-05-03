import { csrfFetch } from "./csrf";

export const CREATE_EVENT = "events/new";
export const LOAD_EVENTS = "events/load";
export const GET_CATEGORIES = "categories/read";
export const UPDATE_EVENT = "events/update";


export const create = (payload) => {
  return {
    type: CREATE_EVENT,
    payload,
  };
};

export const update = (payload) => {
  return {
    type: UPDATE_EVENT,
    payload,
  };
};

export const loadEvents = (events) => {
  return {
    type: LOAD_EVENTS,
    events
  };
};

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => async (dispatch) => {
  const res = await fetch('/api/categories');
  const categories = await res.json()
  dispatch(getCategories(categories))
}

export const fetchEvents = () => async (dispatch) => {
  const res = await fetch('api/events');
  const events = await res.json()
  dispatch(loadEvents(events))
}

export const fetchFromBrowse = () => async (dispatch) => {
  const res = await fetch('/');
  const events = await res.json()
  dispatch(loadEvents(events))
}


export const createEvent = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const event = await res.json();
    dispatch(create(event));
    return event
  }
};

// export const deleteEvent = () => async (dispatch) => {
//   const res = await csrfFetch("/api/events", {
//     method: "DELETE",
//   });
//   dispatch(delet());
//   return res;
// };




const initialState = { events: [], categories: []};

const eventsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_EVENTS:
      newState = {...state, events: action.events}
      return newState;
    case GET_CATEGORIES:
      newState = {...state, categories: action.categories}
      return newState;
    case CREATE_EVENT:
      newState = { ...state, event: action.payload};
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;