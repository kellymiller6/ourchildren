import {connect} from 'react-redux';
import { addObject } from '../actions'

import AddSitter from '../components/Parent/AddSitter'

const mapStateToProps = (state) => {
  return {
    sitters: state.sitterReducer || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSitter: (sitter) => dispatch(addObject(sitter, 'sitters'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSitter)
