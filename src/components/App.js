import React, { useState } from 'react';
import AppRouter from "./AppRouter"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App;