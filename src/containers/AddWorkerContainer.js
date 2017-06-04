import {connect} from 'react-redux';
import { addObject } from '../actions'

import AddWorker from '../components/Parent/AddWorker'

const mapStateToProps = (state) => {
  return {
    workers: state.workerReducer || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWorker: (worker) => dispatch(addObject(worker, 'workers'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorker)
