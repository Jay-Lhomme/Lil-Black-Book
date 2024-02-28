import React from 'react';
import PropTypes from 'prop-types';
import Google from './Google';
import Signin from './Signin';
import Error from './Error-404';

// eslint-disable-next-line react/prop-types
function PageSwitcher({ currentPage }) {
  // Renders different Component based on the currentPage prop/case
  switch (currentPage) {
    case 'google':
      return <Google />;
    case 'signin':
      return <Signin />;
    case 'error':
      return <Error />;

    default:
      return <Signin />;
  }
}

PageSwitcher.prototypes = {
  onSignInClick: PropTypes.func.isRequired,
};

export default PageSwitcher;
