const workerReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_WORKER':
      console.log('add sitter');
      return [...state, action.workers]

    case 'FETCH_WORKER':
      console.log('getting workers');
      return [...state, action.workers]

    case 'RECEIVE_WORKERS':
      return [...state, ...action.workers]
    default:
    return state
  }

}

export default workerReducer
