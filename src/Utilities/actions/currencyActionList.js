export const IS_API_LOADING = 'IS_API_LOADING';
export const SET_PLN_RATE = 'SET_PLN_RATE';
export const SWITCH_DELETE_MODE = 'SWITCH_DELETE_MODE'
export const ADD_TRANSACTION_ID_TO_DELETE = 'ADD_TRANSACTION_ID_TO_DELETE'
export const DELETE_TRANSACTION_ID_FROM_TABLE = 'DELETE_TRANSACTION_ID_FROM_TABLE'
export const CLEAR_ID_TABLE = 'CLEAR_ID_TABLE'
export const ADD_TRANSACTION_TO_STORE = 'ADD_TRANSACTION_TO_STORE'
export const TOOGLE_MODAL = 'TOOGLE_MODAL'

export const isApiLoading = () => ({
  type: IS_API_LOADING
})

export const setPlnRate = plnRate => ({
  type: SET_PLN_RATE,
  plnRate
})

export const switchDeleteMode = () => ({
  type: SWITCH_DELETE_MODE
})

export const addTransactionIdToDelete = id => ({
  type: ADD_TRANSACTION_ID_TO_DELETE,
  id
})

export const deleteTransactionIdFromTable = id => ({
  type: DELETE_TRANSACTION_ID_FROM_TABLE,
  id
})

export const clearIdTable = id => ({
  type: CLEAR_ID_TABLE,
  id
})

export const addTransactionToStore = transactions => ({
  type: ADD_TRANSACTION_TO_STORE,
  transactions
})

export const toogleModal = () => ({
  type: TOOGLE_MODAL
})