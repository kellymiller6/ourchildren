import {connect} from 'react-redux';
import ChildrenPage from '../components/Children/ChildrenPage'

const mapStateToProps = (state) => {
  return {
    children: state.childReducer || []
    }
}

export default connect(mapStateToProps, null)(ChildrenPage)
