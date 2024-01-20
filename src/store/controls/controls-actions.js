import {
  SET_SEARCH,
  SET_REGION
} from './controls-constants';

export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = region => ({
  type: SET_REGION,
  payload: region
})