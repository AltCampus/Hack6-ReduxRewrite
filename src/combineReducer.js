export default function combinedReducer(reducers) {
    const reducersKey = Object.keys(reducers)
    
    return function comboReducer(state, action) {
      reducersKey.forEach(key => {
        console.log(reducers[key])
        state[key] = reducers[key](state[key], action)
      })
      return state
    }
  }