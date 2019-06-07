export const setDate = () => {
  let newDate = new Date()
  let dayOfTheWeek = getDay()
  const day = () => {
    return newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate()
  }
  let month = newDate.getMonth() + 1
  let year = newDate.getFullYear()

  let today = dayOfTheWeek + '. ' + day() + '.0'+ month + '.' + year

  return today
}

const getDay = () => {
  let today = new Date().getDay()

  switch(today) {
    case 0:
      return 'Sun'
    case 1:
      return 'Mon'
    case 2:
      return 'Tue'
    case 3:
      return 'Wed'
    case 4:
      return 'Thu'
    case 5:
      return 'Fri'
    case 6  :
      return 'Sat'
    default: 
      return
  }
}