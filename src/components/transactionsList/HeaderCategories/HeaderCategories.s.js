import glamorous from 'glamorous';
import * as color from '../../../Utilities/colors'

export const HeaderCategoriesWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '5px',
  height: '50px',
  width: '100%',
  background: color.TransparentDarkBlue,
  color: color.BrightWhiteColor
})

export const TransactionCategory = glamorous.div(props => {
  return {
    display: 'flex',
    justifyContent:  props.type === 'price' ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    padding: '0 20px',
    width: props.longer === true ? '40%' : '14%',
    overflow: 'hidden'
  }
})