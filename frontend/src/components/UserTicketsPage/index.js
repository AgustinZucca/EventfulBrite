import React, { useEffect, useState } from "react";
import * as sessionAction from '../../store/session'
import * as eventActions from "../../store/events";
import * as ticketActions from '../../store/tickets'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import "./UserTicketsPage.css";

const UserTicketsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const sessionUser = useSelector((state) => state.session.user)
  const tickets = useSelector((state) => state.tickets.tickets);
  console.log(tickets)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionAction.restoreUser()).then(() => dispatch(eventActions.fetchEvents())).then(() => dispatch(ticketActions.loadTickets(sessionUser.id))).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (isLoaded) {
    return (
      <>
        <div className="eventsPage">
          <h2 className="browseTitle">Purchased Tickets</h2>
          <div className="eventsDisplay">
          
          </div>
        </div>
      </>
    );
  } else return null;
};

export default UserTicketsPage;
