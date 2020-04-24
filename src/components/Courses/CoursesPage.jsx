import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../ducks/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    console.log("Courses Redux title ", this.props.courses.title);
    e.preventDefault();
    // debugger;
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((e) => {
          // debugger;
          return <div key={e.title}>{e.title}</div>;
        })}
      </form>
    );
  }
}

// Have to declare prop types for ESlint for Redux Props
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  // debugger;
  return { courses: state.courses };
}

function mapDisPatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDisPatchToProps)(CoursesPage);
