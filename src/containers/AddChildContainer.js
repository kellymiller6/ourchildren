import {connect} from 'react-redux';

import AddChild from '../components/Children/AddChild'

const mapStateToProps = (state) => {
  return {
    children: state.childReducer || []
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addChild: (child) => dispatch(addObject(child, 'children'))
//   }
// }

export default connect(mapStateToProps, null)(AddChild)
