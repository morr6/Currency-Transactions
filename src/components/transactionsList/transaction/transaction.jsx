import React,{Component} from 'react';
import {connect} from 'react-redux';
import {TransactionWrapper, 
        TransactionSpec,
      } from './transactions.s';
import {addTransactionIdToDelete, 
        deleteTransactionIdFromTable 
      } from '../../../Utilities/actions/currencyActionList';

export class TransactionPure extends Component {
  
  countPlnValue() {
    return (this.props.transaction.euroValue * this.props.plnRate).toFixed(2)
  }

  addTransactionIdToDelete(id) {
    if (this.props.deleteModeOn) {
      if (this.props.idTable.indexOf(id) === -1)
        this.props.addTransactionIdToDelete(id)
      else
        this.props.deleteTransactionIdFromTable(id)
    }
  }
  
  render() {
      const {transaction} = this.props
    return (
      <TransactionWrapper 
        onClick={() => this.addTransactionIdToDelete(transaction.id)}
        isDeleteModeOn={this.props.deleteModeOn}
        shouldBeDeleted={this.props.idTable.indexOf(transaction.id) !== -1}
      >

        <TransactionSpec>
          {transaction.transactionDate}
        </TransactionSpec>
        <TransactionSpec longer={true}> 
          {transaction.transactionName} 
        </TransactionSpec>
        <TransactionSpec type='price'> 
          {transaction.euroValue} EUR
        </TransactionSpec>
        <TransactionSpec type='price'> 
          {this.countPlnValue()} PLN 
        </TransactionSpec>

      </TransactionWrapper>
    )
  }
}

const mapStateToProps = state => ({
  plnRate: state.plnRate,
  deleteModeOn: state.deleteModeOn,
  idTable: state.idTable
});

const mapDispatchToProps = dispatch => ({
  addTransactionIdToDelete: id => dispatch(addTransactionIdToDelete(id)),
  deleteTransactionIdFromTable: id => dispatch(deleteTransactionIdFromTable(id))
})

export const Transaction = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionPure)