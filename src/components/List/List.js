import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static PropTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired, // string - text 
    children: PropTypes.node,
  }

  static defaultProps = { 
    children: <p> I can do all the things!!!</p>
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageAddress={this.props.image} /> 

        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column columnTitle={['Animals']} />
          <Column columnTitle={['Plants']} />
          <Column columnTitle={['Minerals']} />
        </div>

      </section>
    )
  }
}

export default List;
