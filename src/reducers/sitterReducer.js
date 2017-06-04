const sitterReducer = (state=[], action) => {
  switch(action.type){
    case 'RECEIVE_SITTERS':
      return [...state, ...action.sitters]
    default:
    return state
  }

}

export default sitterReducer
