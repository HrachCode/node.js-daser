
const initialState = {
    store : 1
}


function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return  {...state,store: state.store + action.payload}
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counter