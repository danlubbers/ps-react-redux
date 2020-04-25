import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

// ACTION CREATORS
// This is the thunk function!!!
export function loadCourseSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  }
}
export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  }
}
export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  }
}


// Thunks
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

export function saveCourse(course) {
  return function (dispatch) {
    // This is the Thunk!!!
    return courseApi.saveCourse(course).then(saveCourse => {
      course.id ?
        dispatch(updateCourseSuccess(saveCourse)) :
        dispatch(createCourseSuccess(saveCourse))
    }).catch(err => {
      throw err;
    })
  }
}