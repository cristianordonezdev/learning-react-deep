// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './authentication'; 


// Old version less funcional
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
 
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter 
//     }
//   }
 
//   return state;
// };

const store = configureStore({
  reducer: {counter: counterSlice, authentication: authSlice}
});
 
export default store;