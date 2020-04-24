import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
  // debugger;
  return {
    type: types.CREATE_COURSE,
    course
  };
}

// This is the thunk function!!!
export function loadCourseSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  }
}

export function loadCourses() {
  return function (dispatch) {
    // This is the Thunk!!!
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses))
    }).catch(err => {
      throw err;
    })
  }
}