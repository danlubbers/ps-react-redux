import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import {
  beginApiCall,
  apiCallError
} from './apiStatusActions';



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
  // debugger;
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  }
}
export function deleteCourseOptimistic(course) {
  return {
    type: types.DELETE_COURSE_OPTIMISTIC,
    course
  }
}


// Thunks
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall())
    // This is the Thunk!!!
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses))
    }).catch(err => {
      dispatch(apiCallError(err))
      throw err;
    })
  }
}

export function saveCourse(course) {
  // debugger;
  return function (dispatch) {
    dispatch(beginApiCall())
    // This is the Thunk!!!
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ?
        dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse))
    }).catch(err => {
      dispatch(apiCallError(err))
      throw err;
    })
  }
}

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id)
  }
}