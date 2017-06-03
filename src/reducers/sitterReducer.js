const sitterReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_SITTER':
      console.log('getting sitters');
      return [...state, action.sitters]

    default:
    return state
  }
}

export default sitterReducer
