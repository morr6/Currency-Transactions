import glamorous from 'glamorous';
import * as color from '../../../Utilities/colors'

export const MostExpensiveTransactionWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 50px',
  height: '40px',
  width: '500px',
  background: color.DarkBlueColor ,
  color: color.BrightWhiteColor,
  border: `2px solid ${color.BrightWhiteColor}`,
  borderRadius: '.4rem',
})