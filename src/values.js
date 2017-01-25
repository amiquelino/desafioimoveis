
export const getValues = () => {
  const values = require('../api/valores.json')
  return values
}

export const findValue = ( key ) => {
  if(!key)
    throw new Error( "key should not be null!" )
    
  let values = getValues()
  return values[key]
}
