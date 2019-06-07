import React, {Component} from 'react';
import {connect} from 'react-redux'
import { MostExpensiveTransactionWrapper } from './mostExpensiveTransaction.s';
import * as LocalStorage from '../../../localStorage/localStorageHandler'

export class MostExpensiveTransactionPure extends Component { 
  constructor() {
    super();

    this.state = {
      mostExpensiveTransaction: {},
    }
  }

  setMostExpensiveTransaction() {
    let transactions = LocalStorage.getTransactionsFromStorage()

    transactions && this.setState({
      mostExpensiveTransaction: transactions.filter(transaction => 
        transaction.euroValue === Math.max(...transactions.map(val => 
          val.euroValue)) 
      )[0]
    })
  }
  
  componentDidMount() {
    this.setMostExpensiveTransaction()
  }
  

  render() {
    const {mostExpensiveTransaction} = this.state
    console.log(this.state.mostExpensiveTransaction)
    return (
      <MostExpensiveTransactionWrapper>
        {mostExpensiveTransaction && mostExpensiveTransaction.transactionName}
      </MostExpensiveTransactionWrapper>
    )
  }
}

const mapStateToProps = state => ({
  plnRate: state.plnRate
});

export const MostExpensiveTransaction = connect(
  mapStateToProps,
)(MostExpensiveTransactionPure)