import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  }
}

export function loadAuthors() {
  return function (dispatch) {
    // This is the Thunk!!!
    return authorApi.getAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors))
    }).catch(err => {
      throw err;
    })
  }
}