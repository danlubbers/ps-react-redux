import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../ducks/actions/courseActions";
import * as authorActions from "../../ducks/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList.jsx";
import { Redirect } from "react-router-dom";

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount() {
    // This if statement gets rid of rerenders (additional network requests) when we click back to the Courses tab.
    if (this.props.courses.length === 0) {
      this.props.actions.loadCourses().catch((err) => console.error(err));
    }
    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors().catch((err) => console.error(err));
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course/" />}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          {" "}
          Add Course{" "}
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

// Have to declare prop types for ESlint for Redux Props
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((e) => e.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDisPatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDisPatchToProps)(CoursesPage);
