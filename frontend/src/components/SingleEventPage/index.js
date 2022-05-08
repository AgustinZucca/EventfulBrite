import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import * as ticketActions from "../../store/tickets";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import "./SingleEventPage.css";

const SingleEventPage = () => {
  const eventId = useParams().id;
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const events = useSelector((state) => state.events.events);
  const singleEvent = events.find((event) => event.id === parseInt(eventId));
  const { date, name, id, img, location, capacity, description } = singleEvent;
  const [ticketModal, setTicketModal] = useState(false);
  const [tickets, setTickets] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => dispatch(eventActions.fetchEvents()))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  const editBtnClick = (e, id) => {
    const editPath = `/events/${id}/edit`;
    history.push(editPath);
  };

  const removeBtnClick = async (e, id) => {
    await dispatch(eventActions.removeEvent(id))
    history.push('/events');
  };

  const ticketClick = (e) => {
    if (sessionUser) {
      setTicketModal(true);
    } else history.push("/login");
  };

  const closeModal = (e) => {
    setTicketModal(false);
  };

  const checkout = (e, eventId, userId) => {
    e.preventDefault();
    if (tickets > 0) {
      for (let i = 0; i < tickets; i++) {
        dispatch(ticketActions.createTicket({ userId, eventId }));
      }
      return history.push(`/tickets/${sessionUser.id}`);
    }
  };

  if (isLoaded) {
    if (sessionUser?.id === singleEvent.hostId) {
      return (
        <div className="singleEventPage">
          <img className="singleEventBkg" src={img}></img>
          <div className="event">
            <div className="upperPart">
              <img src={img}></img>
              <div className="urPart">
                <h3>Date: {date.slice(0, 10)}</h3>
                <h3>Time: {date.slice(11, 16)}</h3>
                <h2>{name}</h2>
              </div>
            </div>
            <div className="userBtns">
              <button className="editBtn" onClick={(e) => editBtnClick(e, id)}>
                Edit Event
              </button>
              <button
                className="deleteBtn"
                onClick={(e) => removeBtnClick(e, id)}
              >
                Delete Event
              </button>
            </div>
            <div className="lowerPart">
              <div className="lowerPartLeft">
                <div className="eventDescription">
                  <p>{description}</p>
                </div>
              </div>
              <div className="lowerPartRight">
                <div className="eventInfo">
                  <h3>Date and time</h3>
                  <p>
                    {date.slice(0, 10)} {date.slice(11, 16)}
                  </p>
                  <h3>Location</h3>
                  <p>{location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="singleEventPage">
          <img className="singleEventBkg" src={img}></img>
          {ticketModal && (
            <div className="ticketModal">
              <div className="leftArea">
                <div className="topLeft">
                  <h2>{name}</h2>
                  <p>
                    {date.slice(0, 10)} - {date.slice(11, 16)}
                  </p>
                </div>
                <div className="bottLeft">
                  <form
                    onSubmit={(e) => checkout(e, id, sessionUser.id, tickets)}
                    className="ticketForm"
                  >
                    <div className="ticketSelection">
                      <label>General Admission</label>
                      <select
                        onChange={(e) => setTickets(e.target.value)}
                        value={tickets}
                      >
                        <option hidden value={0}>
                          0
                        </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="checkoutBtn">
                      <button>Checkout</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="rightArea">
                <div className="topRight">
                  <div className="closeTicketModal" onClick={closeModal}>
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                  <img className="ticketModalImg" src={img}></img>
                </div>
                <div className="bottRight">
                  <h2>{name}</h2>
                  <p>{location}</p>
                  <p>Capacity: {capacity}</p>
                </div>
              </div>
            </div>
          )}
          <div className="event">
            <div className="upperPart">
              <img src={img}></img>
              <div className="urPart">
                <h3>Date: {date.slice(0, 10)}</h3>
                <h3>Time: {date.slice(11, 16)}</h3>
                <h2>{name}</h2>
              </div>
            </div>
            <div className="ticketsDiv">
              <button className="ticketsBtn" onClick={(e) => ticketClick(e)}>
                Tickets
              </button>
            </div>
            <div className="lowerPart">
              <div className="lowerPartLeft">
                <div className="eventDescription">
                  <p>{description}</p>
                </div>
              </div>
              <div className="lowerPartRight">
                <div className="eventInfo">
                  <h3>Date and time</h3>
                  <p>
                    {date.slice(0, 10)} {date.slice(11, 16)}
                  </p>
                  <h3>Location</h3>
                  <p>{location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default SingleEventPage;
