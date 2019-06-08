import glamorous from 'glamorous';
import * as color from '../../Utilities/colors'

export const MostExpensiveTransactionWrapper = glamorous.div(props => {
  return {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: '25%',
    left: '96%',
    height: '50%',
    width: '20%',
    transition: 'left .7s',
    border: `2px solid ${color.TransparentDarkBlue}`,
    color: color.BrightWhiteColor,

    ':hover' : {
      left: '80%'
    }
  }
})

export const BoxTitleWrapper = glamorous.div({
  transform: 'rotate(180deg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '25px',
  writingMode: 'vertical-rl',
  textOrientation: 'mixed',
  height: '100%',
  width: '20%',
  background: color.TransparentDarkBlue,
})

export const TransactionWrapper = glamorous.div({
  padding: '20px 0',
  fontSize: '20px',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center', 
})

export const TransactionName = glamorous.div({
  width: '60%',
  height: '30%',
  borderTop: `1px solid ${color.BrightWhiteColor}`,
  margin: '20px',
  padding: '10px 0'
})

export const TransactionValues = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
})

export const EuroValue = glamorous.div({
  width: '60%',
  borderTop: `1px solid ${color.BrightWhiteColor}`,
  margin: '20px',
  padding: '10px 0'
})

export const PlnValue = glamorous.div({
  width: '60%',
  borderTop: `1px solid ${color.BrightWhiteColor}`,
  margin: '20px',
  padding: '10px 0'

})