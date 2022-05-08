import React, { useEffect, useState } from "react";
import * as sessionAction from "../../store/session";
import * as eventActions from "../../store/events";
import * as ticketActions from "../../store/tickets";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import "./UserTicketsPage.css";

const UserTicketsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const sessionUser = useSelector((state) => state.session.user);
  const tickets = useSelector((state) => state.tickets.tickets);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ticketCheck, setTicketCheck] = useState();

  useEffect(() => {
    dispatch(sessionAction.restoreUser())
      .then(() => dispatch(eventActions.fetchEvents()))
      .then(() => dispatch(ticketActions.loadTickets(sessionUser.id)))
      .then(() => setIsLoaded(true));
  }, [dispatch, ticketCheck]);

  const handleClick = (e, eventId) => {
    const path = `/events/${eventId}`;
    history.push(path);
  };

  if (!sessionUser && isLoaded) {
    history.push("/login");
  }

  const refundTicket = (e, ticketId) => {
    setIsLoaded(false);
    dispatch(ticketActions.deleteTicket(sessionUser.id, ticketId)).then(() =>
      dispatch(ticketActions.loadTickets(sessionUser.id)).then(() =>
        setIsLoaded(true)
      )
    );
  };

  if (isLoaded && tickets.length > 0) {
    return (
      <>
        <div className="ticketsPage">
          <h2 className="ticketTitle">Purchased Tickets</h2>
          <div className="ticketsDisplay">
            {tickets
              .slice(0)
              .reverse()
              .map(({ Event, id }) => (
                <div className={`ticketSquare`}>
                  <img
                    onClick={(e) => handleClick(e, Event.id)}
                    id={`${Event.id}`}
                    src={Event.img}
                  ></img>
                  <div className="ticketSquareInfo">
                    <p>TicketId: {id}</p>
                    <h3 onClick={(e) => handleClick(e, Event.id)}>
                      {Event.name}
                    </h3>
                    <p className="date">{Event.date.slice(0, 10)}</p>
                    <p>{`${Event.location.slice(0, 40)}...`}</p>
                    <button onClick={(e) => refundTicket(e, id)}>
                      Refund Ticket
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
    );
  } else if (isLoaded && tickets.length === 0) {
    return (
      <div className="noTickets">
        <h1>No tickets to show :(</h1>
      </div>
    );
  } else return null;
};

export default UserTicketsPage;
