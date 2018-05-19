import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); // look at state object - if it has key of post's "id", create new state object without the removed id 
    case FETCH_POST:
    // ES5 way:
      // const post = action.payload.data;
      // const newState = { ...state  };
      // newState[post.id] = post;
      // return state;
    // ES6 way:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // console.log(action.payload.data); // [post1, post2]
      // Need to transform to { 4: post1 } with lodash
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
