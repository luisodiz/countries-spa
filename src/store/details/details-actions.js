import {
  SET_LOADING,
  SET_ERROR,
  SET_COUNTRY,
  CLEAR_DETAILS,
} from './details-constants';

const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err,
});

export const setCountry = country => ({
  type: SET_COUNTRY,
  payload: country,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
  dispatch(setLoading());
  client.get(api.searchByCountry(name))
    .then(({data}) => dispatch(setCountry(data[0])))
    .catch(err => dispatch(setError(err.message)));
};