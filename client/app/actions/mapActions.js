import axios from 'axios';

//import this into the map
export default selectWord = (word) => {
  console.log('clicked')
  return {
    type: 'WORD_SELECTED',
    payload: word
  }
}

/* PUT IN MAP component
function mapDispatchToProps (dispatch) {
  return {
  bindActionCreators({selectWord: selectWord}, dispatch)
}
}
*/

// export default getArticles = (query) => {
//   return (dispatch) => {
//     //change when route is set
//     axios.get('article route', {params: {query: query}})
//     .then( response => {
//       dispatch({type: 'GET_ARTICLES', payload: response.data})
//     })
//     .catch( error => {
//       console.log(error)
//     })
//   }
// }
//
// export default getKeywords = () => {
//   return (dispatch) => {
//     //change when route is set
//     axios.get('keyword route')
//     .then( response => {
//       dispatch({type: 'GET_KEYWORDS', payload: response.data})
//     })
//     .catch( error => {
//       console.log(error)
//     })
//   }
// }
