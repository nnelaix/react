import {connect} from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => ({
  cards: SearchResults(state, props.match.params  )// ?*
});



export default connect(mapStateToProps)(SearchResults);
