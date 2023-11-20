import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Events from './components/Events.jsx';
import Fundraising from './components/Fundraising.jsx';
import Volunteers from './components/Volunteers.jsx';
import PTO from './components/PTO';
import Birthdays from './components/Birthdays';
import Store from './components/Store';
import Login from './components/Login';
import Profile from './components/login/Profile.jsx';
import Footer from './components/Footer';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { CartProvider } from 'use-shopping-cart';
import { setContext } from '@apollo/client/link/context';
import { useShoppingCart } from 'use-shopping-cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-bootstrap';
import './styles/App.css';

// Auth0
const domain = 'dev-rcel1bldoq42stb4.us.auth0.com';
const clientId = 'GVYrR2dZqO91gZq6aQbCEN6oj4tWe2D8';

// Endpoint for GraphQL
const httpLink = createHttpLink({
  uri: '/graphql',
});

// JWT Authorization Header Middleware For Every Request
const authLink = setContext((_, { headers }) => {
  // Get token from localStorage if available
  const token = localStorage.getItem('id_token');
  // Return "headers" to the context so httpLink can read them
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Page Changes
  const handlePageChange = (page) => setCurrentPage(page);

  // SPA Switch
  const render = () => {
    switch (currentPage) {
      case 'home':
        return <Home isMobile={isMobile} />;
      case 'pto':
        return <PTO isMobile={isMobile} />;
      case 'birthdays':
        return <Birthdays isMobile={isMobile} />;
      case 'contact':
        return <Contact isMobile={isMobile} />;
      case 'events':
        return <Events isMobile={isMobile} />;
      case 'fundraising':
        return <Fundraising isMobile={isMobile} />;
      case 'store':
        return <Store isMobile={isMobile} />;
      case 'volunteers':
        return <Volunteers isMobile={isMobile} />;
      case 'about':
        return <About isMobile={isMobile} />;
      case 'login':
        return <Login isMobile={isMobile} />;
      case 'profile':
        return <Profile isMobile={isMobile} />;

      default:
        return <Home isMobile={isMobile} />;
    }
  };

  // Mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991.99);
      // 575.99 (original)
    };

    handleResize();

    addEventListener('resize', handleResize); // eslint-disable-line no-restricted-globals

    return () => {
      removeEventListener('resize', handleResize); // eslint-disable-line no-restricted-globals
    };
  });
  return (
    <>
      <ApolloProvider client={client}>
        <CartProvider>
          <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
          >
            <Header
              isMobile={isMobile}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
            {render()}
            <Footer
              className='footer'
              isMobile={isMobile}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </Auth0Provider>
        </CartProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
