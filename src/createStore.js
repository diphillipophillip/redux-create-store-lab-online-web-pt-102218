export default function createStore(reducer) {
    let state 
    if (state === []) {
      state = []
    } else {
      state = 0
    }

    function dispatch(action) {
      state = reducer(state, action) 
      render()
    }

    function getState() {
      return state
    }

    return {
      dispatch,
      getState
    }
}

function render() {
  const container = document.getElementById('container');
  
}
