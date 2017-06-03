const sitterReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_SITTER':
      console.log('add sitter');
      return [...state, action.sitters]

    case 'FETCH_SITTERS':
      console.log('getting sitters');
      return [...state, action.sitters]

    case 'RECEIVE_SITTERS':
      return [...state, ...action.sitters]
    default:
    return state
  }

}

export default sitterReducer
