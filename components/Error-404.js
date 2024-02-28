/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Error({ onSignInClick }) {
  function navigate() {
    window.open('https://en.wikipedia.org/wiki/List_of_HTTP_status_codes');
  }

  function handleSignInClick() {
    if (onSignInClick) {
      onSignInClick();
    }
  }
  return (
    <div className="global-styles" style={{ background: 'white', minHeight: '100vh', textAlign: 'center' }}>
      <div onClick={handleSignInClick} style={{ paddingTop: '50px', fontSize: '40px' }}>Error</div>
      <h1 style={{
        fontWeight: 'bold', fontSize: '200px', paddingTop: '50px', color: 'lightblue',
      }}
      >404
      </h1>
      <h2 style={{ fontSize: '50px', paddingTop: '50px' }}>This page does not exist</h2>
      <h3 style={{ paddingTop: '50px' }}>Would you like to <button type="button" onClick={navigate} style={{ color: 'salmon' }}>learn about HTTP Errors?</button></h3>
    </div>
  );
}
Error.prototypes = {
  onSignInClick: PropTypes.func.isRequired,
};

export default Error;
