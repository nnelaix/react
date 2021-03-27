import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from './../Hero/Hero';
import {infoContent} from '../../data/dataStore'

const Info = () => (
  <Container>
     <Hero titleText={infoContent.title} imageInfo={infoContent.image} />
    <p>{infoContent.description}</p>
  </Container>
);

export default Info;