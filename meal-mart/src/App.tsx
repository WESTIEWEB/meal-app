import React from 'react';
import Meals from './Components/Meals/Meals';
import Navr from './Components/NavBar/Navr';
import Navbar from './Components/NavBar/NavBar';
// import Modal from './Components/Modal/Modal';
// import Favorites from './Components/Favorites/Favorites';
// import Search from './Components/Search/Search';

function App() {
  return (
    <>
      <Navr />
      {/* <Navbar/> */}
      <Meals />

      {/* <Modal />
      <Favorites />
      <Search/> */}
    </>
  );
}

export default App;
