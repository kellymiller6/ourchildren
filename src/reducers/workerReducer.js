const workerReducer = (state=[], action) => {
  switch(action.type){
    case 'RECEIVE_WORKERS':
      return [...action.workers]
    default:
    return state
  }

}

export default workerReducer
