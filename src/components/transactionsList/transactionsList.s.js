import glamorous from 'glamorous';
import * as color from '../../Utilities/colors'

export const TransactionsListWrapper = glamorous.div({
  marginTop: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '60%',
  marginBottom: '100px'
})

export const Transactions = glamorous.div({
  width: '100%',
})

export const TransactionsSum = glamorous.div({
  display: 'flex',
  justifyContent: 'flex-end'
})

export const SumWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 20px',
  height: '80px',
  width: '15.5%',
  color: color.BrightWhiteColor,
})

export const ModalBackground = glamorous.div({
  position: 'absolute',
  zIndex:0,
  top: 0,
  left: 0,
  background: 'rgba(0,0,0,.15)',
  height: '100%',
  width: '100%'
})