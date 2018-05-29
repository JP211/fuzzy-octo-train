"use strict"
import {createStore} from 'redux';

//STEP 3 define reducers
const reducer = function(state = {books:[]}, action) {
  switch(action.type) {
    case "POST_BOOK":
    let books = state.books.concat(action.payload);
    return {books};
    break;
  }
  return state
}

// This is for one object type
// const reducer = function(state = [], action) {
//   switch(action.type) {
//     case "POST_BOOK":
//     return state = action.payload;
//     return books;
//     break;
//   }
//   return state
// }

//STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function(){
  console.log('current state is: ', store.getState());
  // console.log('current price is: ', store.getState()[1].price);
})

//STEP 2 create and dispatch actions
store.dispatch({type:"POST_BOOK",
payload: [{
    id: 1,
    title: 'Pokie, the best site for makers',
    description: 'An introduction to web applications',
    price: 11.11
},
{
    id: 2,
    title: 'How to take over the world',
    description: 'What we are going to do today.',
    price: 99.00
  }]
})

// Dispatch a second action
store.dispatch({
  type:"POST_BOOK",
  payload: {
    id: 3,
    title: 'Help me Cheezer',
    description: 'A guide to getting a web dev job at Gaia.',
    price: 40.00
  }
})
