import {connect} from 'react-redux';
import Card from '../Card/Card';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  card: GetCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);