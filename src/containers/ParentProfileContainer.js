import {connect} from 'react-redux';
import ParentProfile from '../components/Parent/ParentProfile'

const mapStateToProps = (state) => {
  return {
    sitters: state.sitterReducer || [],
    workers: state.workerReducer || []
  }
}

export default connect(mapStateToProps, null)(ParentProfile)
