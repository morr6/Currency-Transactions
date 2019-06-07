import React,{Component} from 'react';
import {TransactionsListWrapper, 
        Transactions,
        TransactionsSum,
        SumWrapper,
        ModalBackground} from './transactionsList.s';
import { connect } from 'react-redux';
import { Transaction } from './transaction/transaction';
import { AddingForm } from './addingForm/addingForm';
import { ListHeader } from './HeaderCategories/HeaderCategories';
import { toogleModal } from '../../Utilities/actions/currencyActionList'


export class TransactionsListPure extends Component {
  constructor() {
    super();

    this.state = {
      transactionName: '',
      transactionValue: null,
      transactions: [],
    }
  }

  renderTransactions() {
    return this.props.transactions && 
      this.props.transactions.map((transaction,key) => 
        <Transaction transaction={transaction} key={key} />              
      )    
  }

  sumTransactionsValue() {
    var transactions = this.props.transactions
    var sum = 0;

    for (let i=0;i<transactions.length;i++) {
      sum += Number(transactions[i].euroValue)
    }

    return sum   
  }

  render() {
    return (
      <TransactionsListWrapper>
        { this.props.isModalOpen && 
          <ModalBackground 
            onClick={() => this.props.toogleModal()}
          /> 
        }
        <AddingForm />

        <Transactions>
          <ListHeader />
          { this.renderTransactions() }
        </Transactions>
        <TransactionsSum>
          <SumWrapper>
            { this.sumTransactionsValue().toFixed(2) } EUR
          </SumWrapper>
          <SumWrapper>
            { (this.sumTransactionsValue() * this.props.plnRate).toFixed(2) } PLN
          </SumWrapper>
        </TransactionsSum>
      </TransactionsListWrapper>
    )
  }
}

const mapStateToProps = state => ({
  plnRate: state.plnRate,
  transactions: state.transactions,
  isModalOpen: state.isModalOpen
});

const mapDispatchToProps = dispatch => ({
  toogleModal: isModalOpen => dispatch(toogleModal(isModalOpen))
})

export const TransactionsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsListPure)