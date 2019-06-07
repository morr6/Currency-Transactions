export const localStorageInit = () => {
  if (!getTransactionsFromStorage()) {
    localStorage.setItem('transactions', JSON.stringify([]))  
  }
}

export const addTransactionToStorage = (name, euroValue, date) => {
  localStorage.setItem('transactions', JSON.stringify([{
      id: getTransactionsFromStorage() && generateTransactionId(), 
      transactionName: name, 
      euroValue: euroValue,
      transactionDate: date
    },
    ...getTransactionsFromStorage()
    
  ]))
}

export const deleteTransactionFromStorage = (idsToRemove) => {
  localStorage.setItem('transactions', JSON.stringify(
    getTransactionsFromStorage().filter(
      transaction => !idsToRemove.includes(transaction.id))
  ))
}

export const getTransactionsFromStorage = () => {
  try {
    let transactions = JSON.parse(localStorage.getItem('transactions'))

    return transactions
  }
  catch (err){
    console.log(err)
  }
} 

export const generateTransactionId = () => {
  let transactions = getTransactionsFromStorage()
  return transactions.length ? 
  transactions[0].id + 1 : 1
}