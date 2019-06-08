import React, {Component} from 'react';
import { connect } from 'react-redux';
import { 
  MostExpensiveTransactionWrapper, 
  BoxTitleWrapper,
  TransactionWrapper,
  TransactionName,
  TransactionValues,
  EuroValue,
  PlnValue} from './mostExpensiveTransaction.s';

export class MostExpensiveTransactionPure extends Component {
  constructor() {
    super();

    this.state = {
      isBoxVisible: false
    }
  }

  toogleBoxVisible() {
    this.setState({isBoxVisible: !this.state.isBoxVisible})
  }

  getMostExpensiveTransaction() {
    return this.props.transactions && this.props.transactions.filter(
      transaction => Number(transaction.euroValue) === Math.max(
        ...this.props.transactions.map(el => el.euroValue)) 
      )[0]
  }

  render() {
    console.log(this.getMostExpensiveTransaction())
    return(
      <MostExpensiveTransactionWrapper
        onClick={() => this.toogleBoxVisible()}
        isBoxVisible={this.state.isBoxVisible}
      >
        <BoxTitleWrapper>
          MOST EXPENSIVE TRANSACTION
        </BoxTitleWrapper>
        <TransactionWrapper>
          Transaction name
          <TransactionName>
            { 
              this.getMostExpensiveTransaction() && 
              this.getMostExpensiveTransaction().transactionName
            }
          </TransactionName>
          <TransactionValues>
            EUR value
            <EuroValue>
              {
                this.getMostExpensiveTransaction() && 
                this.getMostExpensiveTransaction().euroValue
              }
            </EuroValue>
            PLN value
            <PlnValue>
              {
                this.getMostExpensiveTransaction() && 
                (this.getMostExpensiveTransaction().euroValue * this.props.plnRate).toFixed(2)
              }
            </PlnValue>
          </TransactionValues>

        </TransactionWrapper>
      </MostExpensiveTransactionWrapper>
    )
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions , 
  plnRate: state.plnRate
})

const mapDispatchToProps = dispatch => ({

})

export const MostExpensiveTransaction = connect(
  mapStateToProps,
  mapDispatchToProps
)(MostExpensiveTransactionPure)