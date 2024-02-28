/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Google({ onSignInClick }) {
  function navigate() {
    window.open('https://en.wikipedia.org/wiki/Roman_Empire');
  }

  function handleSignInClick() {
    if (onSignInClick) {
      onSignInClick();
    }
  }

  return (
    <div className="global-styles" style={{ background: 'white', minHeight: '100vh', textAlign: 'center' }}>
      <><title>Google</title>
        <div id="root">
          <header>
            <nav id="header">
              <ul style={{
                paddingTop: '50px', display: 'flex', justifyContent: 'space-between', listStyle: 'none',
              }}
              >
                <li>
                  <Link href="/">+You</Link>
                </li>
                <li>
                  <Link href="/">Gmail</Link>
                </li>
                <li>
                  <Link href="/">Images</Link>
                </li>
                <li>
                  <Link href="/">Apps</Link>
                </li>
                <li>
                  <Link href="/">Sign in</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="body">
            <div id="container">
              <h1 style={{ marginTop: '100px', marginBottom: '50px' }} id="logo">Google</h1>
              <form>
                <input style={{ width: '500px' }} className="input-styles" type="text" />
                <div style={{
                  display: 'flex', flex: 'column', justifyContent: 'center', marginTop: '50px',
                }}
                >
                  <input style={{ marginRight: '5px' }} className="input-styles" type="submit" onClick={navigate} value="Google Search" />
                  <input style={{ marginLeft: '5px' }} className="input-styles" type="submit" onClick={handleSignInClick} value="Feeling Lucky" />
                </div>
              </form>
              <p style={{ marginTop: '30px' }}>
                <small>
                  Google.ca offered in:<Link href="/"> Français</Link>
                </small>
              </p>
            </div>
          </main>

          <footer className="footer-styles">
            <nav className="clearfix">
              <ul
                className="left-links"
              >
                <li style={{
                  listStyle: 'none',
                  position: 'absolute',
                  bottom: '26px',
                  left: '16px',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  padding: '10px',
                }}
                >
                  <Link href="/">Advertising</Link>
                </li>
                <li style={{
                  listStyle: 'none',
                  position: 'absolute',
                  bottom: '26px',
                  left: '140px',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  padding: '10px',
                }}
                >
                  <Link href="/">Business</Link>
                </li>
                <li style={{
                  listStyle: 'none',
                  position: 'absolute',
                  bottom: '26px',
                  left: '240px',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  padding: '10px',
                }}
                >
                  <Link href="/">About</Link>
                </li>
              </ul>
              <ul
                className="right-links"
              >
                <li style={{
                  listStyle: 'none',
                  position: 'absolute',
                  bottom: '26px',
                  right: '200px',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  padding: '10px',
                }}
                >
                  <Link href="/">Privacy</Link>
                </li>
                <li style={{
                  listStyle: 'none',
                  position: 'absolute',
                  bottom: '26px',
                  right: '120px',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  padding: '10px',
                }}
                >
                  <Link href="/">Terms</Link>
                </li>
                <li style={{
                  listStyle: 'none',
                  position: 'absolute',
                  bottom: '26px',
                  right: '16px',
                  display: 'flex',
                  flex: 'row',
                  justifyContent: 'space-evenly',
                  padding: '10px',
                }}
                >
                  <Link href="/">Settings</Link>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </>
    </div>
  );
}

Google.prototypes = {
  onSignInClick: PropTypes.func.isRequired,
};

export default Google;
