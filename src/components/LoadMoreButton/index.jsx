import React from 'react';
import { Button } from './styles';
import PropTypes from 'prop-types';

const LoadMoreButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Ver mais...
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;