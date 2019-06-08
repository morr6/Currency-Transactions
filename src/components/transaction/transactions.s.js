import glamorous from 'glamorous';
import * as color from '../../Utilities/colors'

export const TransactionWrapper = glamorous.div(props => {
  return {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    background: props.isDeleteModeOn ? color.TransparentBrightColor : 'transparent',
    transform: props.shouldBeDeleted ? 'scale(0.9)' : null,
    alignItems: 'center',
    margin: props.isDeleteModeOn ? '10px 0 ' : null,
    color: color.BrightWhiteColor,
    transition: '.5s',

    ':hover': {
      background: color.TransparentDarkBlue
    }
  }
})

export const TransactionSpec = glamorous.div(props => {
  return {
    display: 'flex',
    justifyContent:  props.type === 'price' ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    padding: '0 20px',
    borderBottom: `1px solid rgba(95, 108, 117,.1)`,
    width: props.longer === true ? '40%' : '14%',
    height: '80px',
    overflow: 'hidden'
  }
})

export const DeleteButton = glamorous.button({
  textAlign: 'center',
  border: 'none',
  outline: 'none',
  width: '20px',
  marginRight: '5px'
})