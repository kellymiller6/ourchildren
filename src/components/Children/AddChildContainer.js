import {connect} from 'react-redux';
import { addObject } from '../../actions'

import AddChild from './AddChild'

const mapStateToProps = (state) => {
  return {
    children: state.childReducer || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChild: (child) => dispatch(addObject(child, 'children'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChild)
