import { combineReducers } from 'redux';
import { 
  apiLoading, 
  plnRate, 
  deleteModeOn, 
  idTable,
  transactions,
  isModalOpen  } from './currencyReducerList'

export const rootReducer = combineReducers({
  apiLoading,
  plnRate,
  deleteModeOn,
  idTable,
  transactions,
  isModalOpen
})