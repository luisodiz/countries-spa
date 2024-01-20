import {
  SET_LOADING,
  SET_ERROR,
  SET_COUNTRY,
  CLEAR_DETAILS,
  SET_NEIGHBORS,
} from './details-constants';

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = err => ({
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

export const setNeighbors = countries => ({
  type: SET_NEIGHBORS,
  payload: countries,
});

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
  dispatch(setLoading());
  client.get(api.searchByCountry(name))
    .then(({data}) => dispatch(setCountry(data[0])))
    .catch(err => dispatch(setError(err.message)));
};

export const loadNeighborsByBorder = (borders) => (
  dispatch, _, {client, api}) => {
  client.get(api.filterByCode(borders))
    .then(({data}) => dispatch(setNeighbors(data.map(c => c.name))))
    .catch(console.error);
};