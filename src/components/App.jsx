import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import Header from "./common/Header.jsx";
import CoursesPage from "./Courses/CoursesPage.jsx";
import ManageCourse from "./Courses/ManageCourse.jsx"; // eslint-disable-line import/no-named-as-default
import PageNotFound from "./PageNotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCourse} />
        <Route path="/course" component={ManageCourse} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
