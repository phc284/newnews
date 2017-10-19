import { combineReducers } from "redux";

//change when response structure is set
function articleReducer(state = [], action) {
  switch (action.type) {
    case "GET_ARTICLES": {
      return action.payload;
    }
  }
}

//change when response structure is set
function keywordReducer(state=[], action) {
  switch (action.type) {
    case "GET_KEYWORDS": {
      return action.payload
    }
  }
}

export default combineReducers({
  articleReducer,
  keywordReducer
});
