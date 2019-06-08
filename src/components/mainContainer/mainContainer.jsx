import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ContentWrapper,} from './mainContainer.s';
import { Header } from '../header/header';
import { TransactionsList } from '../transactionsList/transactionsList';
import * as LocalStorage from '../../localStorage/localStorageHandler';
import { addTransactionToStore }  from '../../Utilities/actions/currencyActionList'
import { MostExpensiveTransaction } from '../mostExpensiveTransaction/mostExpensiveTransaction'

export class MainContainerPure extends Component {

  componentDidMount() {
    LocalStorage.localStorageInit()
    this.props.addTransactionToStore(LocalStorage.getTransactionsFromStorage())
  }

  render() {
    return(
      <ContentWrapper>
        <Header />
        <TransactionsList />
        <MostExpensiveTransaction /> 
      </ContentWrapper>
    )
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
})

const mapDispatchToProps = dispatch => ({
  addTransactionToStore: transactions => dispatch(addTransactionToStore(transactions))
})

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainerPure)