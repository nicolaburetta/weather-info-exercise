// Put here your Redux actions
import { OW_APIKEY, OW_BASEURL } from '../data/config';
import { CALL_API, getJSON } from 'redux-api-middleware';

export const FETCH_WEATHER = 'SUCCESS';

export function fetchWeather(cityID) {
  return {
    [CALL_API]: {
      endpoint: `${OW_BASEURL}/weather?id=${cityID}&appid=${OW_APIKEY}`,
      method: 'GET',
      types: [
        {
          type: FETCH_WEATHER,
          payload: (action, state, res) => {
            return getJSON(res);
          }
        },
        'REQUEST',
        'FAILURE'
      ],
      headers: { 'Content-Type': 'application/json' }
    }
  };
}
