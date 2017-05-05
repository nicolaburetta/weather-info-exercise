// Put here your Redux actions
import { OW_APIKEY, OW_BASEURL } from '../data/config';
import axios from 'axios';

export const FETCH_WEATHER = 'SUCCESS';
export const RELOAD_WEATHER = 'RELOAD_WEATHER';
export const REMOVE_CITY = "REMOVE_CITY";

export function fetchWeather(cityID) {
  const request = axios.get(`${OW_BASEURL}/weather?id=${cityID}&appid=${OW_APIKEY}`);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export function reloadWeather(cityID) {
  const request = axios.get(`${OW_BASEURL}/weather?id=${cityID}&appid=${OW_APIKEY}`);

  return {
    type: RELOAD_WEATHER,
    payload: request
  };
};

export function removeCity(cityID) {
  return {
    type: REMOVE_CITY,
    payload: cityID
  };
};
