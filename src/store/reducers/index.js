import { combineReducers } from 'redux';
import { cardsReducer } from './cards.reducer';
import { inputReducer } from './input.reducer';

export default combineReducers({
  inputReducer,
  cardsReducer,
});
