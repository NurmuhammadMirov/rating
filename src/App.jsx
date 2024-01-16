import React from 'react';
import Products from './Products';

const userFormat = (user) => {
  return user.firstName + " " + user.lastName;
}

function App() {
  return <Products />
}

export default App
