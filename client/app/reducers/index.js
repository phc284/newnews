import { combineReducers } from "redux";

//change when response structure is set
function ArticleReducer() {
  return [{
    id: 1,
    title: 'hello',
    text: 'world'
  }]
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

export default combineReducers({
  articles: ArticleReducer,
  // keywords: keywordReducer
});
