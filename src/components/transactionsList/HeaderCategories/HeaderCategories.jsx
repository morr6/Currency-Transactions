import React, {Component} from 'react';
import { HeaderCategoriesWrapper, TransactionCategory } from './HeaderCategories.s';

export class ListHeader extends Component {
  render() {
    return(
      <HeaderCategoriesWrapper>
        <TransactionCategory>
          Date
        </TransactionCategory>
        <TransactionCategory longer={true}>
          Transaction name
        </TransactionCategory>
        <TransactionCategory type='price'>
          EUR
        </TransactionCategory>
        <TransactionCategory type='price'>
          PLN 
        </TransactionCategory>
      </HeaderCategoriesWrapper>
    )
  }
}