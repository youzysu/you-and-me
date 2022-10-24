import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "routes/Home"
import Auth from "routes/Auth"
import SignUp from "routes/SignUp"
import Profile from "routes/Profile"
import Navigation from 'components/Navigation';

function AppRouter({ isLoggedIn }) {

  return (
    <BrowserRouter>
    {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
          <Route
            path="/"
            element={<Home />}
          />
          <Route 
            path="/profile"
            element={<Profile />}
          />
          </>
        ) : (
          <>
          <Route 
            path="/"
            element={<Auth />}
          />
          <Route 
            path="/signup"
            element={<SignUp />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;