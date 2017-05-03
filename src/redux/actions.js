// Put here your Redux actions
import { OW_APIKEY, OW_BASEURL } from '../data/config';
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${OW_BASEURL}/weather?id=${city._id}&appid=${OW_APIKEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
