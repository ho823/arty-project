import React from 'react';
import PropTypes from 'prop-types'
import './styles/Title.scss'


interface Props {
  title: string
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