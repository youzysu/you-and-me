import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home"
import Auth from "../routes/Auth"

function AppRouter({ isLoggedIn }) {

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route
            path="/"
            element={<Home />}
          />
        ) : (
          <Route 
            path="/"
            element={<Auth />}
          />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;