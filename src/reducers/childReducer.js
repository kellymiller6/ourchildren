const childReducer = (state=[], action) => {
  switch(action.type){
    case 'RECEIVE_CHILDREN':
      return [...state, ...action.children]
    default:
    return state
  }

}

export default childReducer
