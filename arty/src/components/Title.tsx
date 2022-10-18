import React from 'react';
import PropTypes from 'prop-types'
import './Title.scss'


interface Props {
    title: string
    // any props that come into the component
}

function Title({ title }: Props) {
  
  return (
    <p id="title">{title}</p>

  );
}

Title.propTypes = {
    title: PropTypes.string
  };

export default Title;