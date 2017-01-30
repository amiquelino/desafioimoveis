export const getValues = () =>  {
  return fetch('http://localhost:3001/api/values')
  .then((response) => response.json())
  .then(responseJson => responseJson)
  .catch(( error ) => {
      console.error( error )
  })
}
