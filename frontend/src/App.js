import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import CreateEventFormPage from "./components/CreateEventPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import * as eventActions from "./store/events"
import EventsPage from "./components/EventsPage";
import SingleEventPage from "./components/SingleEventPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/events/new">
            <CreateEventFormPage />
          </Route>
          <Route exact path="/events">
            <EventsPage />
          </Route>
          <Route path="/events/:id">
            <SingleEventPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
