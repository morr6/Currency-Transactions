import glamorous from 'glamorous';
import * as color from '../../Utilities/colors'

export const HeaderWrapper = glamorous.div({
  width: '60%', 
  display: 'flex',
  justifyContent: 'space-between',
})

export const EuroRateWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: color.DarkBlueColor,
  color: color.BrightWhiteColor,
  border: `2px solid ${color.BrightWhiteColor}`,
  borderRadius: '50px',
  height: '35px',
  width: '150px',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  fontSize: '17',
})