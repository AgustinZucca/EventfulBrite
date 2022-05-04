import React, { useEffect, useState } from "react";
import * as eventActions from "../../store/events";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import "./SingleEventPage.css";

const SingleEventPage = () => {
  const eventId = useParams().id;
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const categories = useSelector((state) => state.events.categories);
  const events = useSelector((state) => state.events.events);
  const singleEvent = events.find((event) => event.id === parseInt(eventId));
  const {date, name, id} = singleEvent
  console.log(sessionUser)
  

  useEffect(() => {
    dispatch(eventActions.fetchCategories());
    dispatch(eventActions.fetchEvents());
  }, [dispatch]);

  const editBtnClick = (e) => {
    const editPath = `/events/${id}/edit`
    history.push(editPath)
  }
  
  
  if (sessionUser.id === singleEvent.hostId) {
    return (
      <div className="singleEventPage">
        <img
          className="singleEventBkg"
          src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"
        ></img>
        <div className="event">
          <div className="upperPart">
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"></img>
            <div className="urPart">
              <h3>{date}</h3>
              <h2>{name}</h2>
            </div>
          </div>
          <div className="userBtns">
            <button className="editBtn" onClick={editBtnClick} >Edit Event</button>
            <button className="deleteBtn" >Delete Event</button>
          </div>
          <div className="lowerPart">
  
          </div>
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
        <div className="event">
          <div className="upperPart">
            <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_1080,q_50,w_1920/v1/clients/houston/926c4535_ddcb_4960_98b3_e374a35ffb1f_ac366d4e-ec15-42bc-a22e-d40acdb95c73.jpg"></img>
            <div className="urPart">
              <h3>{singleEvent.date}</h3>
              <h2>{singleEvent.name}</h2>
            </div>
          </div>
          <div className="ticketsDiv">
            <button className="ticketsBtn">Tickets</button>
          </div>
          <div className="lowerPart">
  
          </div>
        </div>
      </div>
    );
  }

};

export default SingleEventPage;
