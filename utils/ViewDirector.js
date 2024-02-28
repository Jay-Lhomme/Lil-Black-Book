import PropTypes from 'prop-types';
import { useState } from 'react';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
import Signin from '../components/Signin';
import NavBar from '../components/NavBar';
import Google from '../components/Google';
import Error from '../components/Error-404';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
// Current page renders <Google /> to Start;
  const { user, userLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState('google');

  // Functions to switch current page
  const switchToErrorPage = () => {
    setCurrentPage('error');
  };
  const switchToSignInPage = () => {
    setCurrentPage('signin');
  };

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavBar />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </>
    );
  }

  // Renders Google/Error/Signin component based on the current page/case
  if (currentPage === 'google') {
    return <Google onSignInClick={switchToErrorPage} />;
  } if (currentPage === 'error') {
    return <Error onSignInClick={switchToSignInPage} />;
  }
  return <Signin />;
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
