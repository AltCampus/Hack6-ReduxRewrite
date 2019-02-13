console.log(Redux)


// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// const store = Redux.createStore(todos, ['Use Redux'])

// console.log(store)

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

// console.log(store.getState())

// console.log(store)
// // [ 'Use Redux', 'Read the docs' ]


function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

function todos2(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log("hello")
      return state.concat([action.text])
    default:
      return state
  }
}




function createStore(reducer, predefinedState, enhancer){
	var currentState = predefinedState;
	return {
		dispatch: function dispatch(action){
			currentState = reducer(currentState, action);
			return currentState;
		},
		getState: function getState(){
			return currentState;
		},
		replaceReducer: function replaceReducer(newReducer){
			reducer = newReducer;
			console.log(reducer)
			return reducer;
		}

	}
}

var store = createStore(todos,[1,2,3,4,5],null)

console.log("getstate", store.getState());

console.log("dispatch", store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
}))

store.replaceReducer(todos2);

console.log("dispatch", store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs 2'
}))


