import { FETCH_WEATHER, RELOAD_WEATHER, REMOVE_CITY } from './actions';

const DEFAULT_DATA = [
  {
    id: 123,
    name: 'Trento',
    weather: [{
      description: 'Scattered clouds'
    }]
  },
  {
    id: 456,
    name: 'Verona',
    weather: [{
      description: 'Unable to load data'
    }]
  }
];

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    case RELOAD_WEATHER:
      const newState1 = state;
      const index1 = newState1.findIndex(item => item.id === action.payload.data.id);
      newState1[index1] = action.payload.data;
      return newState1;
    case REMOVE_CITY:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};
