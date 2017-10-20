import { combineReducers } from "redux";


function activeWordReducer (state=null, action) {
  switch(action.type) {
    case 'SELECT_WORD':
      console.log('payload in reducer', action.payload)
      return action.payload
      break;
  }
  return state
}

//change when response structure is set
function ArticleReducer(state=null, action) {
  switch(action.type) {
    case 'GET_ARTICLES':
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

export var allReducers = combineReducers({
  articles: ArticleReducer,
  activeWord: activeWordReducer
});
