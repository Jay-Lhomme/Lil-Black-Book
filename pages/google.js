/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/google.module.css';

function Google() {
  return (
    <div className="global-styles">
      <head>
        <title>Fake Google</title>
        <link rel="stylesheet" href="google.module.css" type="text/css" />
      </head>
      <body>
        <div id="root">
          <header>
            <nav id="header">
              <ul>
                <li>
                  <a href="">+You</a>
                </li>
                <li>
                  <a href="">Gmail</a>
                </li>
                <li>
                  <a href="">Images</a>
                </li>
                <li>
                  <a href="">Apps</a>
                </li>
                <li>
                  <a href="">Sign in</a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="body">
            <div id="container">
              <h1 id="logo">Google</h1>
              <form>
                <input className="input-styles" type="text" />
                <input className="input-styles" type="submit" value="Google Search" />
                <input className="input-styles" type="submit" value="Feeling Lucky" />
              </form>
              <p>
                <small>
                  Google.ca offered in:<a href=""> Français</a>
                </small>
              </p>
            </div>
          </main>

          <footer className="footer-styles">
            <nav className="clearfix">
              <ul className="left-links">
                <li>
                  <a href="">Advertising</a>
                </li>
                <li>
                  <a href="">Business</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
              </ul>
              <ul className="right-links">
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
                <li>
                  <a href="">Settings</a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </body>
    </div>
  );
}

export default Google;
