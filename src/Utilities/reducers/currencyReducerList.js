import {
  IS_API_LOADING,
  SET_PLN_RATE, 
  SWITCH_DELETE_MODE,
  ADD_TRANSACTION_ID_TO_DELETE,
  DELETE_TRANSACTION_ID_FROM_TABLE,
  CLEAR_ID_TABLE,
  ADD_TRANSACTION_TO_STORE,
  TOOGLE_MODAL} from '../actions/currencyActionList'

  export const plnRate = ( state = 0, action ) => {
    switch (action.type) {
      case SET_PLN_RATE:
        return action.plnRate
      default:
        return state
    }
  }

  export const apiLoading = ( state = false, action ) => {
    switch (action.type) {
      case IS_API_LOADING:
        return !state
      default:
        return state
    }
  }

  export const deleteModeOn = ( state = false, action ) => {
    switch (action.type) {
      case SWITCH_DELETE_MODE:
        return !state
      default: 
        return state
    }
  }

  export const idTable = ( state = [], action ) => {
    switch (action.type) {
      case ADD_TRANSACTION_ID_TO_DELETE:
        return [...state, action.id]
      case DELETE_TRANSACTION_ID_FROM_TABLE:
        return state.filter(id => id !== action.id)
      case CLEAR_ID_TABLE: 
        return state.filter(id => !id)
      default: 
        return state
    }
  }

  export const transactions = ( state = [], action ) => {
    switch (action.type) {
      case ADD_TRANSACTION_TO_STORE:
        return action.transactions
      default: 
        return state
    }
  }

  export const isModalOpen = ( state = false, action ) => {
    switch (action.type) {
      case TOOGLE_MODAL:
        return !state
      default:
        return state
    }
  }