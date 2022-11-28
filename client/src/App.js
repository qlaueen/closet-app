import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {

  return (
      <GoogleOAuthProvider clientId="920230629394-6aar0kl5i313n7gneq22ullua3rhjbo8.apps.googleusercontent.com">
        <BrowserRouter>
          <Container maxWidth="lg">
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/auth" exact element={<Auth />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </GoogleOAuthProvider>
  );
}

export default App;