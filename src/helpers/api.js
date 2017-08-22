const API_URL = 'http://localhost:8080'

/**
* An asynchronous function to manage our api calls
* 
* @param {string} offset - used to do "load more" feature
*/
const getFeed = async(offset) => new Promise((res, rej) => {
  fetch(`${API_URL}/feed/${offset}`, { method: 'GET' })
    .then(response => response.json())
    .then(data => !data.error ? res(data) : rej())
})
  
export default getFeed
