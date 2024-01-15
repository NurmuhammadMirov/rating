import React from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

const userFormat = (user) => {
  return user.firstName + " " + user.lastName;
}

function App() {
  const isValid = false;
  const user = {
    firstName: 'Garen',
    lastName: 'Lim',
    imgUrl: 'https://picsum.photos/200/300',
  };

  return (
    <>
      {userFormat(user)}
      <Products />
      {/* <img src={user.imgUrl} alt="image content" /> */}
      <Rating rating={0} />
      <br />
      <Rating rating={4} />
      <br />
      <Button variant="primary" disabled={!isValid}>Default</Button>
    </>
  )
}

export default App
