import { combineReducers } from 'redux';
import WeatherReducer from './reducer_cities';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
