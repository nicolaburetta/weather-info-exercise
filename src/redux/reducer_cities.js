import { FETCH_WEATHER } from './actions';

const DEFAULT_DATA = [
  {
    name: 'Trento',
    weather: {
      description: 'Scattered clouds'
    }
  },
  {
    name: 'Verona',
    weather: {
      description: 'Unable to load data'
    }
  }
];

export default function(state = DEFAULT_DATA, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state];
    default:
      return state;
  }
};
