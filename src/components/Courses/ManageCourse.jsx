import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../ducks/actions/courseActions";
import * as authorActions from "../../ducks/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm.jsx";
import { newCourse } from "../../../tools/mockData";

const ManageCourse = ({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // This if statement gets rid of rerenders (additional network requests) when we click back to the Courses tab.
    if (courses.length === 0) {
      loadCourses().catch((err) => console.error(err));
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      loadAuthors().catch((err) => console.error(err));
    }
  }, [props.course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (e) => {
    console.log({ course });
    e.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  };

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

// Have to declare prop types for ESlint for Redux Props
ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  // debugger;
  const slug = ownProps.match.params.slug;
  return {
    course:
      slug && state.courses.length > 0
        ? getCourseBySlug(state.courses, slug)
        : newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDisPatchToProps = {
  loadCourses,
  saveCourse,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDisPatchToProps)(ManageCourse);
