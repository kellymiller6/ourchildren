import {connect} from 'react-redux';

import ParentProfile from './ParentProfile'

const mapStateToProps = (state) => {
  return {
    sitters: state.sitterReducer || [],
    workers: state.workerReducer || []
  }
}

export default connect(mapStateToProps, null)(ParentProfile)
