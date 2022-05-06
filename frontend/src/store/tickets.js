import { csrfFetch } from "./csrf";

export const CREATE_TICKET = 'tickets/createTicket';
export const LOAD_TICKETS = 'tickets/loadTickets'
export const DELETE_TICKET = 'tickets/deleteTicket'

export const create = (payload) => {
    return {
        type: CREATE_TICKET,
        payload
    }
}

export const load = (tickets) => {
    return {
        type: LOAD_TICKETS,
        tickets
    }
}

export const remove = (id) => {
    return {
        type: DELETE_TICKET,
        id
    }
}

export const createTicket = (payload) => async (dispatch) => {
    const res = await csrfFetch('/api/tickets/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const ticket = await res.json();
        dispatch(create(ticket));
        return ticket;
    }
}

export const loadTickets = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/tickets/${userId}`)

    if (res.ok) {
        const tickets = await res.json();
        dispatch(load(tickets))
    }
}

export const deleteTicket = (userId, id) => async (dispatch) => {
    const res = await csrfFetch(`/api/tickets/${userId}/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch(remove(id));
      return res;
    }
  };


const initialState = {tickets: []}

const ticketsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_TICKET: 
            newState = {...state, tickets: action.payload};
            return newState;
        case LOAD_TICKETS:
            newState = {...state, tickets: action.tickets}
            return newState;
        case DELETE_TICKET:
            newState = {...state, tickets: action.tickets}
            return newState;
        default:
            return state
    }

}

export default ticketsReducer;