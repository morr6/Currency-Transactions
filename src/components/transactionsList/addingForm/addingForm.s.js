import glamorous from 'glamorous';
import * as color from '../../../Utilities/colors'

export const AddingFormWrapper = glamorous.form(props => {
  return {
    overflow: 'hidden',
    height: '45%',
    width: '20%', 
    position: 'absolute',
    zIndex: 999,
    left: '40%', 
    marginTop: props.isModalOpen ? 0 : '-50%',
    transition: '.75s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    borderRadius: '5px', 
    border: `1px solid ${color.BrightWhiteColor}`,
    background: color.DarkBlueColor,
    color: color.BrightWhiteColor
  }
})

export const FromTextarea = glamorous.textarea({
  height: '20%',
  maxHeight: '60%',
  width: '60%',
  maxWidth: '90%',
  padding: '20px',
  fontSize: '20px',
  color: color.BrightWhiteColor,
  border: `1px solid ${color.BrightWhiteColor}`,
  borderRadius: '10px',
  boxShadow:'2px 2px 5px rgba(0,0,0,0.5),inset 5px 5px 8px rgba(0,0,0,0.5)',
  background: color.TransparentBrightColor,
  outline: 'none'
})

export const FormInput = glamorous.input(props => {
  return {
    height: '30px',
    width: props.type === 'name' ? '35%': '100px',
    background: 'transparent',
    color: color.BrightWhiteColor,
    fontWeight: 'bold', 
    outline: 'none',
    margin: '0 10px',
    padding: '0 20px',
    transition: '.3s',
    border: 'none',
    borderBottom: `1px solid ${color.BrightWhiteColor}`,

    ':focus': {
      border: `1px solid ${color.BrightWhiteColor}`,
      borderRadius: '50px'
    }
  }
})

export const ButtonsWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '325px'
})