import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/dashBoard/dashBoard";
import NavBar from "./components/layout/navBar";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import ProfileSummary from "./components/profile/profileSummary";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container-fluid">
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile/:navitem?/:id?" component={ProfileSummary} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
