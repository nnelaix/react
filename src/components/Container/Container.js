import React from 'react';
import styles from './Container.scss';
import PropTypes, { node } from 'prop-types';

const Container = props => ({
  children: PropTypes.node,
});

render() {
  const { children } = this.props;
  return (
    <div className={styles.component}>{children}
    </div>
  );
  }

export default Container;
