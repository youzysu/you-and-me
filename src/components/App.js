import React, { useEffect, useState } from 'react';
import AppRouter from "components/AppRouter"
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      (user ? setIsLoggedIn(true) : setIsLoggedIn(false))
      setInit(true)
    })
  }, [])
  
  return (
    <div>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "잠시만 기다려주세요!"}
    </div>
  )
}

export default App;