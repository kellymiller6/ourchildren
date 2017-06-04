import { fetchData, receiveSitters, receiveWorkers, receiveChildren } from '../actions'
import { connect } from 'react-redux';
import App from '../components/App'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSitters: () => dispatch(fetchData('sitters', receiveSitters)),
    fetchWorkers: () => dispatch(fetchData('workers', receiveWorkers)),
    fetchChildren: () => dispatch(fetchData('children', receiveChildren))
  }
}

export default connect(null, mapDispatchToProps)(App)
