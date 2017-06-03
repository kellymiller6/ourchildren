const childReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_CHILD':
      console.log('add sitter');
      return [...state, action.children]

    case 'FETCH_CHILD':
      console.log('getting children');
      return [...state, action.children]

    case 'RECEIVE_CHILDREN':
      return [...state, ...action.children]
    default:
    return state
  }

}

export default childReducer
