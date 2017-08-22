
/**
* Creates a hash map from a simple array of objects
* 
* @param {array} arr
* @param {string} key - the property that will be used to create the hash
*/
const createHashMap = (arr, key) => {
  return Object.assign(
    ...arr.map(item => (
      { [ item[key] ]: item }
    ))
  )
}

export { createHashMap }
