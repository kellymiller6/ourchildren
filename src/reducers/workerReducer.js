const workerReducer = (state=[], action) => {
  switch(action.type){
    case 'RECEIVE_WORKERS':
      return [...state, ...action.workers]
    default:
    return state
  }

}

export default workerReducer
