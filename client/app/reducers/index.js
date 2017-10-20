import { combineReducers } from "redux";

function activeWordReducer (state=null, action) {
  switch(action.type) {
    case 'SELECT_WORD':
      console.log('payload in word reducer', action.payload)
      return action.payload
      break;
  }
  return state
}

//change when response structure is set
function articleReducer(state=null, action) {
  switch(action.type) {
    case 'GET_ARTICLES':
    console.log('payload in article reducer', action.payload)
     return action.payload
     break;
  }
  return state
}
//
// //change when response structure is set
// function keywordReducer(state=[], action) {
//   switch (action.type) {
//     case "GET_KEYWORDS": {
//       return action.payload
//     }
//   }
// }

export const allReducers = combineReducers({
  articles: articleReducer,
  activeWord: activeWordReducer
});
