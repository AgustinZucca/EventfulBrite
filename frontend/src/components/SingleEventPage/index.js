import React, { useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import "./SingleEventPage.css";

const SingleEventPage = () => {
  const eventId = useParams().id;
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categories = useSelector((state) => state.events.categories);
  const events = useSelector((state) => state.events.events);
  const singleEvent = events.find((event) => event.id === parseInt(eventId));
  const { date, name, id, img, location, capacity } = singleEvent;
  const [ticketModal, setTicketModal] = useState(false);
  const [tickets, setTickets] = useState(0);

  const editBtnClick = (e, id) => {
    const editPath = `/events/${id}/edit`;
    history.push(editPath);
  };

  const removeBtnClick = async (e, id) => {
    await dispatch(eventActions.removeEvent(id));
    const path = `/events`;
    return history.push(path);
  };

  const ticketClick = (e, id) => {
    setTicketModal(true);
  };

  const checkout = (e) => {
    
  };

  if (sessionUser?.id === singleEvent.hostId) {
    return (
      <div className="singleEventPage">
        <img
          className="singleEventBkg"
          src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"
        ></img>
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
          <div className="lowerPart"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="singleEventPage">
        <img
          className="singleEventBkg"
          src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"
        ></img>
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
                <form onSubmit={checkout} className="ticketForm">
                  <div className='ticketSelection'>
                    <label>General Admission</label>
                    <select
                      onChange={(e) => setTickets(e.target.value)}
                      value={tickets}
                    >
                      <option>0</option>
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
            <button className="ticketsBtn" onClick={ticketClick}>
              Tickets
            </button>
          </div>
          <div className="lowerPart"></div>
        </div>
      </div>
    );
  }
};

export default SingleEventPage;
