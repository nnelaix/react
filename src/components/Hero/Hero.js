import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2> 
    <img className={styles.image} src={props.imageAddress} />
    <img className={styles.image} src={props.imageFaq} />
    <img className={styles.image} src={props.imageInfo} />
  </header>
);

Hero.propTypes = { 
  titleText: PropTypes.node.isRequired, 
  imageAddress: PropTypes.string.isRequired,
  imageFaq: PropTypes.string.isRequired,
  imageInfo: PropTypes.string.isRequired,
};

export default Hero;
