import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {searchResults} from './../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: searchResults(state, props.match.params.id)
});



export default connect(mapStateToProps)(SearchResults);
