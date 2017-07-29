import {connect} from 'react-redux';
import AddChild from '../components/Children/AddChild'

const mapStateToProps = (state) => {
  return {
    children: state.childReducer || []
  }
}

export default connect(mapStateToProps, null)(AddChild)
