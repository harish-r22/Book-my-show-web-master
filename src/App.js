import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Contract from "./services/mail";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import homePage from "./components/home.page";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/homePage" className="navbar-brand">
            MyFunShow
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Event
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
          <Route exact path={["/", "/homePage"]} component={homePage} />
            <Route exact path= "/tutorials" component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id"  component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
