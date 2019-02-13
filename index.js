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

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
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


// CombineReduer Function

const rootReducer  = Redux.combineReducers({todos, todos2})
console.log('rootreduer',rootReducer)

function combineReducer(reducers) {
  const reducersKey = Object.keys(reducers)
  // return function comboReducer(currentState, action) {
  //   return todos(currentState, action)
  return function comboReducer(state, action) {
    reducersKey.forEach(key => {
      console.log(reducers[key])
      state[key] = reducers[key](state[key], action)
    })
    return state
  }
}

console.log(combineReducer({todos, todos2}))