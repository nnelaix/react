import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={this.props.icon} /></span> {this.props.title} </h3> 

        {this.state.cards.map(({key, ...cardsProps}) => (
          <Card key={key} {...cardsProps} />
        ))}

        {/* }
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div> */}
        
      </section>
       
    );
  }
}

export default Column;
