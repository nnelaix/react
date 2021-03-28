import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Container from './../Container/Container';


class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const {cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>Search Results</h3> 

          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}

          
        </section>
       </Container>
    );
  }
}

export default SearchResults;
