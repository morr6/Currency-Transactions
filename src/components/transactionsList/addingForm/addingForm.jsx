import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
  AddingFormWrapper, 
  FormInput, 
  FromTextarea,
  ButtonsWrapper,} from './addingForm.s';
import * as LocalStorage from '../../../localStorage/localStorageHandler';
import * as date from '../../../Utilities/dateHandler';
import {addTransactionToStore,toogleModal} from '../../../Utilities/actions/currencyActionList'
import {Button} from '../../header/buttons/buttons.s'

export class AddingFormPure extends Component {
  constructor() {
    super();

    this.state = {
      transactionName: '',
      transactionValue: null,
      transactionDate: '',
   }
  }

  setTransactionName(event) {
    this.setState({transactionName: event.target.value})
  }

  setTransactionValue(event) {
    let value = Number(event.target.value)
    if (typeof value === "number") {
      this.setState({transactionValue: value})
    }
  } 

  setTransactionDate() {
    this.setState({transactionDate: date.setDate()})
  }

  addTransaction(event) {
    event.preventDefault();
    
    if(this.state.transactionName && this.state.transactionValue) {
      LocalStorage.addTransactionToStorage(
        this.state.transactionName,
        this.state.transactionValue.toFixed(2),
        this.state.transactionDate
      )
    }
    this.props.addTransactionToStore(LocalStorage.getTransactionsFromStorage())
    this.props.toogleModal();
  }

  closeModal(event) {
    event.preventDefault()
    this.props.toogleModal()
  }

  componentDidMount() {
    this.setTransactionDate()
  }

  render() {
    return(
        <AddingFormWrapper isModalOpen={this.props.isModalOpen}>
            Transaction name
            <FromTextarea
              type='name' 
              onChange={(event) => this.setTransactionName(event)}
            />
            <div>
              Value
              <FormInput 
                placeholder='EUR'
                onChange={(event) => this.setTransactionValue(event)} 
              /> 
            </div>
            <ButtonsWrapper>
              <Button 
                onClick={(event) => this.addTransaction(event)}
              > 
                add
              </Button>
              <Button
                onClick={(event) => this.closeModal(event)}
              > 
                cancel
              </Button>
            </ButtonsWrapper>
          </AddingFormWrapper>
    )
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions,
  isModalOpen: state.isModalOpen
})

const mapDispatchToProps = dispatch => ({
  addTransactionToStore: transactions => dispatch(addTransactionToStore(transactions)),
  toogleModal: isModalOpen => dispatch(toogleModal(isModalOpen))
})

export const AddingForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddingFormPure)