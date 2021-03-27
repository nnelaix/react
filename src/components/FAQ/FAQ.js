import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Hero from './../Hero/Hero';
import {faqContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContent.title} imageFaq={faqContent.image} />
    <p>{faqContent.description}</p>
  </Container>
);

export default FAQ;