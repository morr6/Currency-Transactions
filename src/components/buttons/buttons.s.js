import glamorous from 'glamorous';
import * as color from '../../Utilities/colors'

  export const ButtonsWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '325px',
  })

  export const Button = glamorous.button(props => {
    return {
      height: '40px',
      width: '150px',
      background: 'transparent',
      border: props.deleteModeOn ? 
        props.apply ? '2px solid green' : '2px solid red' : 
          `2px solid ${color.BrightWhiteColor}`,
      outline: 'none',
      fontWeight: 'bold',
      color: color.BrightWhiteColor,
      borderRadius: '50px',
      fontSize: '17',
      cursor: 'pointer',
      transition: '.5s',

      ':hover': {
        background: color.BrightWhiteColor,
        color: color.DarkBlueColor
      }  
    }
  })