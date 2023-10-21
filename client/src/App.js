import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';

// Endpoint for GraphQL
const httpLink = createHttpLink({
  uri: '/graphql',
});

// JWT Authorization Header Middleware For Every Request
const authLink = setContext((_, { headers }) => {
  // Get token from local storage if available
  const token = localStorage.getItem('id_token');
  // Return headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<SearchBooks />} />
            {/* <Route path='/me' element={} /> */}
            {/* <Route path='/books/:bookId' element={} /> */}
            <Route path='/saved' element={<SavedBooks />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignupForm />} />
            <Route
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
