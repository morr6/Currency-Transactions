import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ButtonsWrapper, Button } from './buttons.s';
import * as LocalStorage from '../../../localStorage/localStorageHandler'
import { 
  switchDeleteMode,
  clearIdTable,
  addTransactionToStore,
  toogleModal } from '../../../Utilities/actions/currencyActionList' 

export class ButtonsPure extends Component {

  cancelDeletion() {
    this.props.switchDeleteMode();
    this.props.clearIdTable();
  }

  deleteTransactions() {
    LocalStorage.deleteTransactionFromStorage(this.props.idTable)
    this.props.addTransactionToStore(LocalStorage.getTransactionsFromStorage())
    this.props.clearIdTable();
    
    this.props.switchDeleteMode()
  }

  renderButtons() {
    if (this.props.deleteModeOn) {
      return <ButtonsWrapper>
        <Button
          apply={true}
          deleteModeOn={this.props.deleteModeOn}
          onClick={() => this.deleteTransactions()}
        >  
          apply 
        </Button>
        <Button 
          deleteModeOn={this.props.deleteModeOn}
          apply={false}
          onClick={() => this.cancelDeletion()}
        > 
          cancel 
        </Button>
      </ButtonsWrapper>
    }
    else {
      return  <ButtonsWrapper>
        <Button
          onClick={() => this.props.toogleModal()}
        > 
          new 
        </Button>
        <Button 
          onClick={() => this.props.switchDeleteMode()}
        > 
          delete   
        </Button>
      </ButtonsWrapper>
    }
  }

  render() {
    return(
      this.renderButtons()
    )
  }
}

const mapStateToProps = state => ({
  deleteModeOn: state.deleteModeOn,
  idTable: state.idTable,
  transaction: state.transactions,
  isModalOpen: state.isModalOpen
})

const mapDispatchToProps = dispatch => ({
  switchDeleteMode: deleteModeOn => dispatch(switchDeleteMode(deleteModeOn)),
  clearIdTable: id => dispatch(clearIdTable(id)),
  addTransactionToStore: transactions => dispatch(addTransactionToStore(transactions)),
  toogleModal: isModalOpen => dispatch(toogleModal(isModalOpen))
})

export const Buttons = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsPure)