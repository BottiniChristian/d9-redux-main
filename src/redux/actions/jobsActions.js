import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from '../actionTypes';

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';

export const fetchJobs = (query) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_JOBS_REQUEST });

    try {
      const response = await fetch(`${baseEndpoint}${query}&limit=20`);
      if (!response.ok) throw new Error('Errore nella fetch');
      const { data } = await response.json();
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_FAILURE, payload: error.message });
    }
  };
};
