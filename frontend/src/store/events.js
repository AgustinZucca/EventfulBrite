import { csrfFetch } from "./csrf";

export const CREATE_EVENT = "events/createEvent";
export const LOAD_EVENTS = "events/fetchEvents";
export const GET_CATEGORIES = "categories/fetchCategories";
export const UPDATE_EVENT = "events/updateEvent";


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

  if (res.ok) {
    const categories = await res.json()
    dispatch(getCategories(categories))
  }
}

export const fetchEvents = () => async (dispatch) => {
  const res = await fetch('api/events');
  const events = await res.json()
  dispatch(loadEvents(events))
}

// export const fetchFromBrowse = () => async (dispatch) => {
//   const res = await fetch('/');
//   const events = await res.json()
//   dispatch(loadEvents(events))
// }


export const createEvent = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/events/new", {
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

export const updateEvent = (payload) => async (dispatch) => {
  const res = await fetch(`/api/events`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    const event = await res.json()
    dispatch(create(payload))
    return event;
  }

}

// export const deleteEvent = (id) => async (dispatch) => {
//   const res = await csrfFetch("/api/events", {
//     method: "DELETE",
//   });
//   if (res.ok) {
//     dispatch(delet());
//     return res;
//   }
// };




const initialState = { events: [], categories: []};

const eventsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_EVENT:
      newState = { ...state, event: action.payload};
      return newState;
    case LOAD_EVENTS:
      newState = {...state, events: action.events}
      return newState;
    case GET_CATEGORIES:
      newState = {...state, categories: action.categories}
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;