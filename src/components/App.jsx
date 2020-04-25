import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage.jsx";
import AboutPage from "./About/AboutPage.jsx";
import Header from "./common/Header.jsx";
import CoursesPage from "./Courses/CoursesPage.jsx";
import ManageCourse from "./Courses/ManageCourse.jsx";
import PageNotFound from "./PageNotFound.jsx";

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
    </div>
  );
}

export default App;
