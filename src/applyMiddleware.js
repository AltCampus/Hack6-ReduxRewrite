// Apply Middleware
function applyMiddleware(...middlewares) {
  return createStore => (reducer, predefinedState, enhancer) => {

    // Initialize store and dispatch
    const store = createStore(reducer, predefinedState, enhancer);
    const dispatch = store.dispatch;
    let chain = [];

    // Clarify applyMiddleware_API, and pass it into each middleware 
    let applyMiddleware_API = {
      getState: store.getState(),
      dispatch: (action) => dispatch(action)
    }

    // and collect the outputs in chain
    chain = middlewares.map((middleware) => middleware(applyMiddleware_API));

    // Compose these middlewares, pass dispatch into this composed functions
    dispatch = compose(...chain)(store.dispatch);

    // and then return store and dispatch
    return {
      ...store,
      dispatch
    }
  }
}