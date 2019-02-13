
export default function createStore(reducer, predefinedState, enhancer){
	var currentState = predefinedState || {};
	var subscribeList = [];
	var subIndex = 0;
	return {
		dispatch: function dispatch(action){
			currentState = reducer(currentState, action);
			for (fun of subscribeList){
				fun();
			}
			return currentState;
		},
		getState: function getState(){
			return currentState;
		},
		replaceReducer: function replaceReducer(newReducer){
			reducer = newReducer;
			return reducer;
		},
		subscribe: function subscribe(callback){
			subscribeList.push(callback);
			var unsubscribe =  function unsubscribe(){
				subscribeList.splice(subscribeList.indexOf(callback),1)
				console.log("unsubscribed");
				console.log("Current subscription list: ", subscribeList)
			}
			subIndex++;
			return unsubscribe;
		}

	}
}



// var store = createStore(combinedReducer({todos,counter}),null,null)

// console.log("getstate", store.getState());

// console.log("dispatch", store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// }))

// // store.replaceReducer(todos2);

// console.log("dispatch", store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs 2'
// }))

// var unsub = store.subscribe(()=>{console.log("Hello")})
// // unsub();

// var unsub2 = store.subscribe(()=>{console.log("Hello2")})
// // unsub2();

// var unsub3 = store.subscribe(()=>{console.log("Hello3")})



